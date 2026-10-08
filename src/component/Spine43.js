import * as pc from 'playcanvas';
import { spine } from 'spine-core-import'; // spine-core-import is an alias
import { SpineTextureWrapper } from './SpineTextureWrapper.js';
import { vertexGLSL, fragmentGLSL, vertexWGSL, fragmentWGSL } from './SpineShaders.js';
import semver from './semver/index.js';

// the vertex size in 32-bit words: position and uv as floats, light and dark color as bytes
const VERTEX_SIZE = 6;

// blend states for the spine blend modes (normal, additive, multiply, screen), all with
// premultiplied alpha, matching the spine-webgl runtime
const BLEND_STATES = [
    [pc.BLENDMODE_ONE, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA, pc.BLENDMODE_ONE, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA],
    [pc.BLENDMODE_ONE, pc.BLENDMODE_ONE, pc.BLENDMODE_ONE, pc.BLENDMODE_ONE],
    [pc.BLENDMODE_DST_COLOR, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA, pc.BLENDMODE_ONE, pc.BLENDMODE_ONE_MINUS_SRC_ALPHA],
    [pc.BLENDMODE_ONE, pc.BLENDMODE_ONE_MINUS_SRC_COLOR, pc.BLENDMODE_ONE, pc.BLENDMODE_ONE_MINUS_SRC_COLOR]
].map(([colorSrc, colorDst, alphaSrc, alphaDst]) => new pc.BlendState(
    true,
    pc.BLENDEQUATION_ADD, colorSrc, colorDst,
    pc.BLENDEQUATION_ADD, alphaSrc, alphaDst
));

const SHADER_DESC = {
    uniqueName: 'spine43',
    vertexGLSL,
    fragmentGLSL,
    vertexWGSL,
    fragmentWGSL,
    attributes: {
        vertex_position: pc.SEMANTIC_POSITION,
        vertex_texCoord0: pc.SEMANTIC_TEXCOORD0,
        vertex_color: pc.SEMANTIC_COLOR,
        vertex_darkColor: pc.SEMANTIC_ATTR8
    }
};

// spine packs colors as 0xAARRGGBB, which the vertex buffer needs as bytes in RGBA order
const toRGBA = color => ((color & 0xff00ff00) | ((color >> 16) & 0xff) | ((color & 0xff) << 16)) >>> 0;

/**
 * A Spine animation object, for Spine 4.3. Rendering is done by the SkeletonRendererCore of the
 * spine-core runtime, which handles attachments, clipping, blend modes and colors.
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

        const atlas = new spine.TextureAtlas(atlasData);
        for (const page of atlas.pages) {
            const texture = new SpineTextureWrapper(textureData[page.name]);
            page.setTexture(texture);

            // textures without premultiplied alpha are premultiplied by the shader
            texture.premultipliedAlpha = page.pma;
        }

        const json = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(atlas));
        json.scale *= 0.01;
        const _skeletonData = json.readSkeletonData(skeletonData);
        this.skeletonVersion = semver.valid(semver.coerce(_skeletonData.version));

        this.skeleton = new spine.Skeleton(_skeletonData);
        this.skeleton.updateWorldTransform(spine.Physics.update);

        this.stateData = new spine.AnimationStateData(this.skeleton.data);
        this.states = [new spine.AnimationState(this.stateData)];

        this._renderer = new spine.SkeletonRendererCore();

        this._node = new pc.GraphNode();
        this._aabb = new pc.BoundingBox();
        this._aabbMin = new pc.Vec3();
        this._aabbMax = new pc.Vec3();

        this._renderCounts = { vertexCount: 0, indexCount: 0 };
        this._vertexFormat = new pc.VertexFormat(app.graphicsDevice, [
            { semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.TYPE_FLOAT32 },
            { semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.TYPE_FLOAT32 },
            { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.TYPE_UINT8, normalize: true },
            { semantic: pc.SEMANTIC_ATTR8, components: 4, type: pc.TYPE_UINT8, normalize: true }
        ]);
        this._vertexBuffer = null;
        this._indexBuffer = null;
        this._floats = null;
        this._uints = null;
        this._indices = null;

        // a mesh instance per draw call, in use this frame, and all created so far
        this._meshInstances = [];
        this._meshInstancePool = [];

        // materials per texture, one for each blend mode
        this._materials = new Map();

        this._priority = 0;
        this._timeScale = 1;
        this._layers = [pc.LAYERID_UI];
        this._hidden = false;
    }

    destroy() {
        this.removeFromLayers();

        for (const meshInstance of this._meshInstancePool) {
            // the meshes share the vertex and index buffers, which are destroyed below
            const mesh = meshInstance.mesh;
            mesh.vertexBuffer = null;
            mesh.indexBuffer[0] = null;
            meshInstance.destroy();
            mesh.destroy();
        }
        this._meshInstancePool.length = 0;
        this._meshInstances.length = 0;

        this._vertexBuffer?.destroy();
        this._vertexBuffer = null;
        this._indexBuffer?.destroy();
        this._indexBuffer = null;

        for (const materials of this._materials.values()) {
            materials.forEach(material => material?.destroy());
        }
        this._materials.clear();

        this.skeleton = null;
        this.stateData = null;
        this._node = null;
    }

    hide() {
        if (this._hidden) return;
        this._hidden = true;
        this._meshInstancePool.forEach((meshInstance) => {
            meshInstance.visible = false;
        });
    }

    show() {
        if (!this._hidden) return;
        this._hidden = false;
        this._meshInstancePool.forEach((meshInstance) => {
            meshInstance.visible = true;
        });
    }

    _getMaterial(texture, blendMode) {
        let materials = this._materials.get(texture);
        if (!materials) {
            materials = [];
            this._materials.set(texture, materials);
        }

        let material = materials[blendMode];
        if (!material) {
            const pcTexture = texture.pcTexture;
            material = new pc.ShaderMaterial(SHADER_DESC);
            material.setParameter('uTexture', pcTexture);
            material.setParameter('uTextureSrgb', pcTexture.srgb ? 1 : 0);
            material.setParameter('uPremultiply', texture.premultipliedAlpha ? 0 : 1);
            material.blendState = BLEND_STATES[blendMode];
            material.depthWrite = false;
            material.cull = pc.CULLFACE_NONE;
            material.update();
            materials[blendMode] = material;
        }
        return material;
    }

    // make the vertex and index buffers at least the required size
    _allocateBuffers(numVertices, numIndices) {
        const device = this._app.graphicsDevice;

        if (!this._vertexBuffer || this._vertexBuffer.getNumVertices() < numVertices) {
            this._vertexBuffer?.destroy();
            this._vertexBuffer = new pc.VertexBuffer(device, this._vertexFormat, Math.ceil(numVertices * 1.5), {
                usage: pc.BUFFER_DYNAMIC
            });
            const storage = this._vertexBuffer.lock();
            this._floats = new Float32Array(storage);
            this._uints = new Uint32Array(storage);
        }

        // 16-bit indices address up to 65536 vertices
        const capacity = this._vertexBuffer.getNumVertices();
        const format = capacity > 0x10000 ? pc.INDEXFORMAT_UINT32 : pc.INDEXFORMAT_UINT16;
        if (!this._indexBuffer || this._indexBuffer.getNumIndices() < numIndices || this._indexBuffer.getFormat() !== format) {
            this._indexBuffer?.destroy();
            this._indexBuffer = new pc.IndexBuffer(device, format, Math.ceil(numIndices * 1.5), pc.BUFFER_DYNAMIC);
            const storage = this._indexBuffer.lock();
            this._indices = format === pc.INDEXFORMAT_UINT32 ? new Uint32Array(storage) : new Uint16Array(storage);
        }

        for (const meshInstance of this._meshInstancePool) {
            meshInstance.mesh.vertexBuffer = this._vertexBuffer;
            meshInstance.mesh.indexBuffer[0] = this._indexBuffer;
        }
    }

    _getMeshInstance(index, material) {
        let meshInstance = this._meshInstancePool[index];
        if (meshInstance) {
            meshInstance.material = material;
        } else {
            const mesh = new pc.Mesh(this._app.graphicsDevice);
            mesh.vertexBuffer = this._vertexBuffer;
            mesh.indexBuffer[0] = this._indexBuffer;
            mesh.primitive[0].type = pc.PRIMITIVE_TRIANGLES;
            mesh.primitive[0].indexed = true;

            meshInstance = new pc.MeshInstance(mesh, material, this._node);
            meshInstance.visible = !this._hidden;
            this._meshInstancePool.push(meshInstance);
        }
        return meshInstance;
    }

    // change the number of mesh instances drawn, keeping the layers up to date
    _setDrawCount(count) {
        if (count !== this._meshInstances.length) {
            this.removeFromLayers();
            this._meshInstances = this._meshInstancePool.slice(0, count);
            this.addToLayers();
        }
    }

    _render() {
        const firstCommand = this._renderer.render(this.skeleton, true);

        let numVertices = 0;
        let numIndices = 0;
        for (let command = firstCommand; command; command = command.next) {
            numVertices += command.numVertices;
            numIndices += command.numIndices;
        }
        this._renderCounts.vertexCount = numVertices;
        this._renderCounts.indexCount = numIndices;

        if (numIndices === 0) {
            this._setDrawCount(0);
            return;
        }

        if (!this._vertexBuffer || this._vertexBuffer.getNumVertices() < numVertices ||
            this._indexBuffer.getNumIndices() < numIndices) {
            this._allocateBuffers(numVertices, numIndices);
        }

        const floats = this._floats;
        const uints = this._uints;
        const indices = this._indices;
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        let vertexOffset = 0;
        let indexOffset = 0;
        let drawCount = 0;
        let lastTexture = null;
        let lastBlendMode = -1;
        let meshInstance = null;

        for (let command = firstCommand; command; command = command.next) {
            const { positions, uvs, colors, darkColors } = command;

            for (let i = 0, v = vertexOffset * VERTEX_SIZE; i < command.numVertices; i++, v += VERTEX_SIZE) {
                const x = positions[i * 2];
                const y = positions[i * 2 + 1];
                floats[v] = x;
                floats[v + 1] = y;
                floats[v + 2] = uvs[i * 2];
                floats[v + 3] = uvs[i * 2 + 1];
                uints[v + 4] = toRGBA(colors[i]);
                uints[v + 5] = toRGBA(darkColors[i]);

                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }

            const commandIndices = command.indices;
            for (let i = 0; i < command.numIndices; i++) {
                indices[indexOffset + i] = commandIndices[i] + vertexOffset;
            }

            // consecutive commands with the same texture and blend mode are drawn together, as
            // the colors are per vertex
            if (command.texture === lastTexture && command.blendMode === lastBlendMode) {
                meshInstance.mesh.primitive[0].count += command.numIndices;
            } else {
                meshInstance = this._getMeshInstance(drawCount, this._getMaterial(command.texture, command.blendMode));
                meshInstance.drawOrder = this._priority + drawCount;
                meshInstance.mesh.primitive[0].base = indexOffset;
                meshInstance.mesh.primitive[0].count = command.numIndices;
                lastTexture = command.texture;
                lastBlendMode = command.blendMode;
                drawCount++;
            }

            vertexOffset += command.numVertices;
            indexOffset += command.numIndices;
        }

        this._vertexBuffer.lock();
        this._vertexBuffer.unlock();
        this._indexBuffer.lock();
        this._indexBuffer.unlock();

        // the meshes share the bounds, assigning them updates the mesh instance bounds
        this._aabbMin.set(minX, minY, 0);
        this._aabbMax.set(maxX, maxY, 0);
        this._aabb.setMinMax(this._aabbMin, this._aabbMax);
        for (let i = 0; i < drawCount; i++) {
            this._meshInstancePool[i].mesh.aabb = this._aabb;
        }

        this._setDrawCount(drawCount);
    }

    update(dt) {
        if (this._hidden) return;

        dt *= this._timeScale;

        const states = this.states;
        for (let i = 0; i < states.length; i++) {
            states[i].update(dt);
        }
        for (let i = 0; i < states.length; i++) {
            states[i].apply(this.skeleton);
        }

        // advance the skeleton time used by physics constraints
        this.skeleton.update(dt);

        if (this.autoUpdate) {
            this.skeleton.updateWorldTransform(spine.Physics.update);
        }

        this._render();
    }

    setPosition(p) {
        this._position.copy(p);
    }

    /**
     * Tints the whole skeleton. To tint parts of a skeleton, set the color of its slots.
     *
     * @param {pc.Color} color - The tint color.
     */
    setTint(color) {
        this.skeleton.color.set(color.r, color.g, color.b, color.a);
    }

    removeFromLayers() {
        if (this._meshInstances.length) {
            for (let i = 0; i < this._layers.length; i++) {
                const layer = this._app.scene.layers.getLayerById(this._layers[i]);
                if (layer) layer.removeMeshInstances(this._meshInstances);
            }
        }
    }

    addToLayers() {
        if (this._meshInstances.length) {
            for (let i = 0; i < this._layers.length; i++) {
                const layer = this._app.scene.layers.getLayerById(this._layers[i]);
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
