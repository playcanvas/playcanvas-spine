import * as pc from 'playcanvas';
import { spine } from 'spine-core-import'; // spine-core-import is an alias
import { SpineTextureWrapper } from './SpineTextureWrapper.js';
import semver from './semver/index.js';

const ATTACHMENT_TYPE = {
    NULL: 0,
    MESH: 1,
    REGION: 2
};

// index data for region (quad) type of attachment
const QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];

/**
 * A Spine animation object.
 */
class Spine {
    /**
     * Determines whether the Spine object calls skeleton.updateWorldTransform in the update loop.
     * Default is true.
     */
    autoUpdate = true;

    /**
     * The Skeleton object.
     *
     * @type {spine.Skeleton}
     */
    skeleton;

    /**
     * A list of all AnimationState objects.
     *
     * @type {spine.AnimationState[]}
     */
    states;

    /**
     * Contains the skeleton and animation states as detailed in the Spine Runtime documentation.
     *
     * @param {pc.AppBase} app - The application that will manage this Spine object.
     * @param {string} atlasData - Text data loaded from the atlas file.
     * @param {object} skeletonData - JSON data loaded from the skeleton file.
     * @param {object} textureData - Texture initialization data. An object where the key is the
     * texture filename and the value is the pc.Texture resource.
     */
    constructor(app, atlasData, skeletonData, textureData) {
        this._app = app;

        this._position = new pc.Vec3();

        let atlas;

        // EP: As instructed: https://github.com/playcanvas/playcanvas-spine/pull/73
        //
        // API differs before we can know which which file version this is supposed to support.
        // The data file opened will determine which code paths are used.  This file may
        // or may not be concatenated with the spine library that supports it.
        //
        // use the length of the function signatures to guess which library has been concatenated.
        if (spine.TextureAtlas.length === 1) {
            // spine 4.1
            atlas = new spine.TextureAtlas(atlasData);
            for (const page of atlas.pages) {
                page.setTexture(
                    // @ts-ignore
                    new SpineTextureWrapper(textureData[page.name])
                );
            }
        } else {
            // spine 3.6 and 3.8
            atlas = new spine.TextureAtlas(
                atlasData,
                // @ts-ignore
                (path) => {
                    return new SpineTextureWrapper(textureData[path]);
                }
            );
        }

        const json = new spine.SkeletonJson(
            new spine.AtlasAttachmentLoader(atlas)
        );
        json.scale *= 0.01;
        const _skeletonData = json.readSkeletonData(skeletonData);

        // Compatibility queries
        this.skeletonVersion = semver.valid(
            semver.coerce(_skeletonData.version)
        );
        this._spine_3_6_0 = semver.satisfies(this.skeletonVersion, '<=3.6.0'); // version 3.6.0 or below
        this._spine_3_7_99 = semver.satisfies(this.skeletonVersion, '<=3.7.99'); // version 3.7.99 or below
        this._spine_4_0_X = semver.satisfies(this.skeletonVersion, '~4.0.0'); // version 4.0 family (4.0.31 - 4.0.79-beta)
        this._spine_4_1_X = semver.satisfies(this.skeletonVersion, '~4.1.23'); // version 4.1 family

        this.skeleton = new spine.Skeleton(_skeletonData);
        this.skeleton.updateWorldTransform();

        this.stateData = new spine.AnimationStateData(this.skeleton.data);
        this.states = [new spine.AnimationState(this.stateData)];
        this.clipper = new spine.SkeletonClipping();

        this._node = new pc.GraphNode();
        this._meshes = [];
        this._meshInstances = [];
        this._materials = {};
        this._tint = {};

        this._aabb = new pc.BoundingBox();
        this._aabbTempArray = [];
        this._aabbTempOffset = new pc.Vec2();
        this._aabbTempSize = new pc.Vec2();

        this._renderCounts = { vertexCount: 0, indexCount: 0 };
        this._vertexFormat = null;
        this._vertexBuffer = null;
        this._indexBuffer = null;

        this._priority = 0;
        this._timeScale = 1;
        this._layers = [pc.LAYERID_UI];

        this.init();

        this._hidden = false;
    }

    destroy() {
        this.removeFromLayers();

        for (let i = 0; i < this._meshInstances.length; i++) {
            this._meshInstances[i].mesh.vertexBuffer = null;
            this._meshInstances[i].mesh.indexBuffer.length = 0;
            this._meshInstances[i].material = null;
        }

        if (this._vertexBuffer) {
            this._vertexBuffer.destroy();
            this._vertexBuffer = null;
        }

        if (this._indexBuffer) {
            this._indexBuffer.destroy();
            this._indexBuffer = null;
        }

        this._meshInstances = [];
        this.skeleton = null;
        this.stateData = null;
        this._materials = {};
        this._node = null;
    }

    hide() {
        if (this._hidden) return;

        for (let i = 0, n = this._meshInstances.length; i < n; i++) {
            this._meshInstances[i].visible = false;
        }

        this._hidden = true;
    }

    show() {
        if (!this._hidden) return;

        for (let i = 0, n = this._meshInstances.length; i < n; i++) {
            this._meshInstances[i].visible = true;
        }

        this._hidden = false;
    }

    init() {
        // vertex format
        this._vertexFormat = new pc.VertexFormat(this._app.graphicsDevice, [
            {
                semantic: pc.SEMANTIC_POSITION,
                components: 2,
                type: pc.TYPE_FLOAT32
            },
            {
                semantic: pc.SEMANTIC_NORMAL,
                components: 4,
                type: pc.TYPE_UINT8,
                normalize: true
            },
            {
                semantic: pc.SEMANTIC_TEXCOORD0,
                components: 2,
                type: pc.TYPE_FLOAT32
            },
            {
                semantic: pc.SEMANTIC_COLOR,
                components: 4,
                type: pc.TYPE_UINT8,
                normalize: true
            }
        ]);

        // init slots
        const drawOrder = this.skeleton.drawOrder;
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            this.initSlot(drawOrder[i]);
        }
    }

    initSlot(slot) {
        slot.positions = []; // vec2 world space positions
        slot.uvs = []; // vec2 uv coordinates
        slot.indices = []; // triangle indices
        slot.vertexColor = {}; // rgba color of the slot

        // last update name and type, used to detect when attachment changes on a slot
        slot._active = { name: '', type: ATTACHMENT_TYPE.NULL };

        this.initAttachment(slot);
    }

    createMaterial(texture) {
        const material = new pc.StandardMaterial();

        material.emissiveMap = texture;
        material.emissiveVertexColor = true;
        material.emissive = pc.Color.WHITE;

        material.opacityMap = texture;
        material.opacityVertexColor = true;

        material.depthWrite = false;
        material.cull = pc.CULLFACE_NONE;
        material.blendType = pc.BLEND_PREMULTIPLIED;

        if (this._spine_3_6_0) {
            // override premultiplied chunk because images are already premultiplied however the opacity is not premultiplied by slot alpha
            const alphaPremul = [
                'gl_FragColor.rgb *= vVertexColor.a;',
                'gl_FragColor.a = dAlpha;'
            ].join('\n');
            material.chunks.outputAlphaPremulPS = alphaPremul;
        }

        material.update();
        return material;
    }

    initAttachment(slot) {
        const attachment = slot.attachment;
        if (attachment) {
            slot._active.name = attachment.name;
            if (attachment instanceof spine.RegionAttachment) {
                slot._active.type = ATTACHMENT_TYPE.REGION;
            } else if (attachment instanceof spine.MeshAttachment) {
                slot._active.type = ATTACHMENT_TYPE.MESH;
            }

            let texture = null;

            // search for texture property if it exists
            if (attachment.region) {
                if (attachment.region.texture) {
                    texture = attachment.region.texture.pcTexture;
                }
                if (attachment.region.page && attachment.region.page.texture) {
                    texture = attachment.region.page.texture.pcTexture;
                }
            }

            // create / assign material
            if (texture) {
                if (texture instanceof pc.StandardMaterial) {
                    this._materials[texture.name] = texture;
                    slot.material = texture.name;
                } else {
                    // get a unique key for the texture
                    let key = null;
                    if (texture.name) {
                        key = texture.name; // texture name might not be unique - should be resolved with content
                    } else if (texture.getSource() instanceof Image) {
                        key = texture.getSource().getAttribute('src');
                    }
                    if (key) {
                        // create a new material if required
                        if (this._materials[key] === undefined) {
                            const material = this.createMaterial(texture);
                            this._materials[key] = material;
                        }
                        slot.material = key;
                    }
                }
            }
        }
    }

    updateSlot(slot, clipper) {
        const attachment = slot.attachment;
        const name = attachment.name;

        // attachment can change on the slot
        // prettier-ignore
        const type =
            attachment instanceof spine.RegionAttachment ?
                ATTACHMENT_TYPE.REGION :
                attachment instanceof spine.MeshAttachment ?
                    ATTACHMENT_TYPE.MESH :
                    ATTACHMENT_TYPE.NULL;

        if (slot._active.name !== name || slot._active.type !== type) {
            this.initAttachment(slot);
        }

        // convert vertices to world space
        slot.positions.length = 0;
        if (attachment instanceof spine.RegionAttachment) {
            if (this._spine_4_1_X) {
                attachment.computeWorldVertices(slot, slot.positions, 0, 2);
            } else {
                attachment.computeWorldVertices(
                    slot.bone,
                    slot.positions,
                    0,
                    2
                );
            }
        } else if (attachment instanceof spine.MeshAttachment) {
            attachment.computeWorldVertices(
                slot,
                0,
                attachment.worldVerticesLength,
                slot.positions,
                0,
                2
            );
        }

        // mesh vertex color
        const tint = this._tint[name];
        slot.vertexColor = {
            r: Math.round(255 * slot.color.r * (tint ? tint.r : 1)),
            g: Math.round(255 * slot.color.g * (tint ? tint.g : 1)),
            b: Math.round(255 * slot.color.b * (tint ? tint.b : 1)),
            a: Math.round(255 * slot.color.a * (tint ? tint.a : 1))
        };

        // indices
        const srcTriangles = attachment.triangles || QUAD_TRIANGLES;

        let i;
        let count;

        if (clipper.isClipping()) {
            // clip triangles on CPU
            const twoColorTint = false;
            clipper.clipTriangles(
                slot.positions,
                0,
                srcTriangles,
                srcTriangles.length,
                attachment.uvs,
                spine.Color.WHITE,
                spine.Color.WHITE,
                twoColorTint
            );

            // copy clipped vertex data
            slot.positions.length = 0;
            slot.uvs.length = 0;
            const vertexSize = twoColorTint ? 12 : 8; // clipper output format
            count = clipper.clippedVertices.length;
            for (i = 0; i < count; i += vertexSize) {
                slot.positions.push(
                    clipper.clippedVertices[i],
                    clipper.clippedVertices[i + 1]
                );
                slot.uvs.push(
                    clipper.clippedVertices[i + 6],
                    1 - clipper.clippedVertices[i + 7]
                );
            }

            // copy clipped index data
            slot.indices = clipper.clippedTriangles.slice();
        } else {
            // copy vertex data (uvs only, position was filled in already)
            slot.uvs.length = 0;
            count = slot.positions.length;
            for (i = 0; i < count; i += 2) {
                slot.uvs.push(attachment.uvs[i], 1 - attachment.uvs[i + 1]);
            }

            // reference index data
            slot.indices = srcTriangles;
        }

        // update overall counts
        this._renderCounts.vertexCount += slot.positions.length / 2;
        this._renderCounts.indexCount += slot.indices.length;
    }

    updateSkeleton(dt) {
        // count vertices and triangles
        this._renderCounts.vertexCount = 0;
        this._renderCounts.indexCount = 0;

        // handle clipping start / end / range
        const clipper = this.clipper;
        const slotRangeStart = -1;
        const slotRangeEnd = -1;
        let inRange = false;
        if (slotRangeStart === -1) inRange = true;

        const drawOrder = this.skeleton.drawOrder;
        const count = drawOrder.length;
        for (let i = 0; i < count; i++) {
            const slot = drawOrder[i];

            if (!this._spine_3_7_99) {
                if (!slot.bone.active) {
                    clipper.clipEndWithSlot(slot);
                    continue;
                }
            }

            if (slotRangeStart >= 0 && slotRangeStart === slot.data.index) {
                inRange = true;
            }

            if (!inRange) {
                clipper.clipEndWithSlot(slot);
                continue;
            }

            if (slotRangeEnd >= 0 && slotRangeEnd === slot.data.index) {
                inRange = false;
            }

            const attachment = slot.getAttachment();
            if (attachment instanceof spine.ClippingAttachment) {
                clipper.clipStart(slot, attachment);
                continue;
            } else if (
                !(attachment instanceof spine.RegionAttachment) &&
                !(attachment instanceof spine.MeshAttachment)
            ) {
                if (!this._spine_3_7_99) clipper.clipEndWithSlot(slot);
                continue;
            }

            // update slot geometry
            this.updateSlot(slot, clipper);
        }
    }

    render() {
        // remove materials from meshInstances as they keep references to meshInstances not allowing them to be GC'd
        this._meshInstances.forEach((instance) => {
            instance.material = null;
        });

        this.removeFromLayers();
        this._meshes = [];
        this._meshInstances.length = 0;

        // any vertices / triangles to render
        if (
            this._renderCounts.indexCount > 0 &&
            this._renderCounts.vertexCount > 0
        ) {
            // update aabb
            this.skeleton.getBounds(
                this._aabbTempOffset,
                this._aabbTempSize,
                this._aabbTempArray
            );
            this._aabb.center = new pc.Vec3(
                this._aabbTempOffset.x,
                this._aabbTempOffset.y,
                0
            );
            this._aabb.halfExtents = new pc.Vec3(
                0.5 * this._aabbTempSize.x,
                0.5 * this._aabbTempSize.y,
                0
            );

            // make vertex buffer at least required size
            if (
                !this._vertexBuffer ||
                this._vertexBuffer.getNumVertices() <
                    this._renderCounts.vertexCount
            ) {
                if (this._vertexBuffer) this._vertexBuffer.destroy();

                this._vertexBuffer = new pc.VertexBuffer(
                    this._app.graphicsDevice,
                    this._vertexFormat,
                    this._renderCounts.vertexCount
                );
            }

            // make index buffer at least required size
            if (
                !this._indexBuffer ||
                this._indexBuffer.getNumIndices() <
                    this._renderCounts.indexCount
            ) {
                if (this._indexBuffer) this._indexBuffer.destroy();

                this._indexBuffer = new pc.IndexBuffer(
                    this._app.graphicsDevice,
                    pc.INDEXFORMAT_UINT16,
                    this._renderCounts.indexCount
                );
            }

            // batching start
            let currentMaterialKey = null;
            let batchStartIndex = 0;
            let batchIndexCount = 0;

            // vertex / index buffer access
            const dstVertices = new pc.VertexIterator(this._vertexBuffer);
            const dstIndices = new Uint16Array(this._indexBuffer.lock());
            let dstIndexOffset = 0;
            let dstVertexOffset = 0;

            const drawOrder = this.skeleton.drawOrder;
            const count = drawOrder.length;
            for (let i = 0; i < count; i++) {
                const slot = drawOrder[i];

                if (
                    slot.attachment &&
                    slot.material &&
                    slot.positions.length > 0 &&
                    slot.indices.length > 0
                ) {
                    // material switch
                    if (
                        currentMaterialKey &&
                        currentMaterialKey !== slot.material
                    ) {
                        this.SubmitBatch(
                            batchStartIndex,
                            batchIndexCount,
                            currentMaterialKey
                        );

                        // prepare next batch
                        currentMaterialKey = slot.material;
                        batchStartIndex = dstIndexOffset;
                        batchIndexCount = 0;
                    }
                    currentMaterialKey = slot.material;

                    // write vertex data
                    const positions = slot.positions;
                    const r = slot.vertexColor.r;
                    const g = slot.vertexColor.g;
                    const b = slot.vertexColor.b;
                    const a = slot.vertexColor.a;
                    const uvs = slot.uvs;
                    let j;
                    const posCount = positions.length / 2;

                    for (j = 0; j < posCount; j++) {
                        dstVertices.element[pc.SEMANTIC_POSITION].set(
                            positions[j * 2],
                            positions[j * 2 + 1]
                        );
                        dstVertices.element[pc.SEMANTIC_NORMAL].set(
                            0,
                            255,
                            0,
                            0
                        ); // 0,1,0 normal stored in 8 bit per component
                        dstVertices.element[pc.SEMANTIC_COLOR].set(r, g, b, a);
                        dstVertices.element[pc.SEMANTIC_TEXCOORD0].set(
                            uvs[j * 2],
                            1.0 - uvs[j * 2 + 1]
                        );
                        dstVertices.next();
                    }

                    // write index data
                    const indices = slot.indices;
                    const indCount = indices.length;
                    for (j = 0; j < indCount; j++)
                        dstIndices[dstIndexOffset + j] =
                            indices[j] + dstVertexOffset;

                    batchIndexCount += indCount;
                    dstIndexOffset += indCount;
                    dstVertexOffset += posCount;
                }
            }

            dstVertices.end();
            this._indexBuffer.unlock();

            // final batch
            this.SubmitBatch(
                batchStartIndex,
                batchIndexCount,
                currentMaterialKey
            );
        }

        // add all instances to layers
        this.addToLayers();
    }

    SubmitBatch(indexBase, indexCount, materialKey) {
        if (indexCount > 0) {
            const mesh = new pc.Mesh(this._app.graphicsDevice);

            mesh.vertexBuffer = this._vertexBuffer;
            mesh.indexBuffer[0] = this._indexBuffer;
            mesh.primitive[0].type = pc.PRIMITIVE_TRIANGLES;
            mesh.primitive[0].base = indexBase;
            mesh.primitive[0].count = indexCount;
            mesh.primitive[0].indexed = true;
            mesh.aabb = this._aabb;
            this._meshes.push(mesh);

            const mi = new pc.MeshInstance(
                mesh,
                this._materials[materialKey],
                this._node
            );
            mi.drawOrder = this.priority + this._meshInstances.length;
            mi.visible = !this._hidden;
            this._meshInstances.push(mi);
        }
    }

    update(dt) {
        if (this._hidden) return;

        dt *= this._timeScale;

        let i;
        const n = this.states.length;
        for (i = 0; i < n; i++) {
            this.states[i].update(dt);
        }

        for (i = 0; i < n; i++) {
            this.states[i].apply(this.skeleton);
        }

        if (this.autoUpdate) {
            this.skeleton.updateWorldTransform();
        }

        this.updateSkeleton();
        this.render();
    }

    setPosition(p) {
        this._position.copy(p);
    }

    setTint(name, color) {
        this._tint[name] = color;
    }

    removeFromLayers() {
        if (this._meshInstances.length) {
            for (let i = 0; i < this._layers.length; i++) {
                const layer = this._app.scene.layers.getLayerById(
                    this._layers[i]
                );
                if (layer) layer.removeMeshInstances(this._meshInstances);
            }
        }
    }

    addToLayers() {
        if (this._meshInstances.length) {
            for (let i = 0; i < this._layers.length; i++) {
                const layer = this._app.scene.layers.getLayerById(
                    this._layers[i]
                );
                if (layer) layer.addMeshInstances(this._meshInstances);
            }
        }
    }

    /**
     * The first AnimationState object. There is always one AnimationState.
     *
     * @type {spine.AnimationState}
     */
    get state() {
        return this.states[0];
    }

    /**
     * An integer value which determines when the spine mesh is rendered relative to other Spine
     * meshes. Lower numbers are rendered first.
     *
     * @type {number}
     */
    set priority(value) {
        this._priority = value;
    }

    get priority() {
        return this._priority;
    }

    set timeScale(value) {
        this._timeScale = value;
    }

    get timeScale() {
        return this._timeScale;
    }

    set layers(value) {
        this.removeFromLayers();
        this._layers = value || [];
        this.addToLayers();
    }

    get layers() {
        return this._layers;
    }
}

export { Spine };
