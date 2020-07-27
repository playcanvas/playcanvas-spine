pc.extend(pc, function () {
    // Compare semantic versions
    function versionCompare(v1, v2, options) {
        var lexicographical = options && options.lexicographical,
            zeroExtend = options && options.zeroExtend,
            v1parts = v1.split('.'),
            v2parts = v2.split('.');

        function isValidPart(x) {
            return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
        }

        if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
            return NaN;
        }

        if (zeroExtend) {
            while (v1parts.length < v2parts.length) v1parts.push("0");
            while (v2parts.length < v1parts.length) v2parts.push("0");
        }

        if (!lexicographical) {
            v1parts = v1parts.map(Number);
            v2parts = v2parts.map(Number);
        }

        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                return 1;
            }

            if (v1parts[i] == v2parts[i]) {
                continue;
            } else if (v1parts[i] > v2parts[i]) {
                return 1;
            } else {
                return -1;
            }
        }

        if (v1parts.length != v2parts.length) {
            return -1;
        }

        return 0;
    }

    var ATTACHMENT_TYPE = {
        NULL: 0,
        MESH: 1,
        REGION: 2
    };

    var TO_TEXTURE_FILTER = {
        9728: pc.FILTER_NEAREST,
        9729: pc.FILTER_LINEAR,
        9984: pc.FILTER_NEAREST_MIPMAP_NEAREST,
        9985: pc.FILTER_LINEAR_MIPMAP_NEAREST,
        9986: pc.FILTER_NEAREST_MIPMAP_LINEAR,
        9987: pc.FILTER_LINEAR_MIPMAP_LINEAR
    };

    var TO_UV_WRAP_MODE = {
        33648: pc.ADDRESS_MIRRORED_REPEAT,
        33071: pc.ADDRESS_CLAMP_TO_EDGE,
        10487: pc.ADDRESS_REPEAT
    };

    // index data for region (quad) type of attachment
    var QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];

    /**
     * @class
     * @name SpineTextureWrapper
     * @description Implement Spine's interface for textures
     * @param {pc.Texture} texture - A PlayCanvas Texture
     */
    var SpineTextureWrapper = function (texture) {
        this._image = {
            width: texture.width,
            height: texture.height
        };

        this.pcTexture = texture;
    };

    SpineTextureWrapper.prototype = {
        setFilters: function (minFilter, magFilter) {
            this.pcTexture.minFilter = TO_TEXTURE_FILTER[minFilter];
            this.pcTexture.magFilter = TO_TEXTURE_FILTER[magFilter];
        },

        setWraps: function (uWrap, vWrap) {
            this.pcTexture.addressU = TO_UV_WRAP_MODE[uWrap];
            this.pcTexture.addressV = TO_UV_WRAP_MODE[vWrap];
        },

        getImage: function () {
            return this._image;
        }
    };


    /**
     * @name spine
     * @namespace
     * @description The Spine API.
     */

    /**
     * @class
     * @name pc.Spine
     * @classdesc  A Spine animation object.
     * @description Contains the skeleton and animation states as detailed in the Spine Runtime documentation.
     * @param {pc.Application} app - The application that will manage this Spine object.
     * @param {string} atlasData - Text data loaded from the atlas file.
     * @param {object} skeletonData - JSON data loaded from the skeleton file.
     * @param {object} textureData - Texture initialization data. An object where the key is the texture filename and the value is the pc.Texture resource.
     * @property {spine.Skeleton} skeleton The Skeleton object.
     * @property {spine.AnimationState} state The first AnimationState object. There is always one AnimationState.
     * @property {spine.AnimationState[]} states A list of all AnimationState objects.
     * @property {number} priority An integer value which determines when the spine mesh is rendered relative to other Spine meshes. Lower numbers are rendered first.
     * @property {boolean} autoUpdate Determines whether the Spine object calls skeleton.updateWorldTransform in the update loop. Default is true.
     */
    var Spine = function (app, atlasData, skeletonData, textureData) {
        this._app = app;

        this._position = new pc.Vec3();

        var atlas = new spine.TextureAtlas(atlasData, function (path) {
            return new SpineTextureWrapper(textureData[path]);
        });
        var json = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(atlas));
        json.scale *= 0.01;
        var _skeletonData = json.readSkeletonData(skeletonData);
        this.skeletonVersion = _skeletonData.version;
        this._spine_3_6_0 = versionCompare(this.skeletonVersion, "3.6.0") <= 0;
        this._spine_3_7_99 = versionCompare(this.skeletonVersion, "3.7.99") <= 0;

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

        this.autoUpdate = true;

        this._model = new pc.Model();
        this._model.graph = this._node;
        this._model.meshInstances = this._meshInstances;

        this._hidden = false;
    };

    Spine.prototype.destroy = function () {
        if (this._model) {
            this.removeFromLayers();
        }

        for (var i = 0; i < this._meshInstances.length; i++) {
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

        this._model = null;
        this._meshInstances = [];
        this.skeleton = null;
        this.stateData = null;
        this.state = null;
        this._materials = {};
        this._node = null;
    };

    Spine.prototype.hide = function () {
        if (this._hidden)
            return;

        for (var i = 0, n = this._meshInstances.length; i < n; i++) {
            this._meshInstances[i].visible = false;
        }

        this._hidden = true;
    };

    Spine.prototype.show = function () {
        if (!this._hidden)
            return;

        for (var i = 0, n = this._meshInstances.length; i < n; i++) {
            this._meshInstances[i].visible = true;
        }

        this._hidden = false;
    };

    Spine.prototype.init = function () {

        // vertex format
        this._vertexFormat = new pc.VertexFormat(this._app.graphicsDevice, [
            { semantic: pc.SEMANTIC_POSITION, components: 2, type: pc.TYPE_FLOAT32 },
            { semantic: pc.SEMANTIC_NORMAL, components: 4, type: pc.TYPE_UINT8, normalize: true },
            { semantic: pc.SEMANTIC_TEXCOORD0, components: 2, type: pc.TYPE_FLOAT32 },
            { semantic: pc.SEMANTIC_COLOR, components: 4, type: pc.TYPE_UINT8, normalize: true }
        ]);

        // init slots
        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, n = drawOrder.length; i < n; i++) {
            this.initSlot(drawOrder[i]);
        }
    };

    Spine.prototype.initSlot = function (slot) {
        slot.positions = [];    // vec2 world space positions
        slot.uvs = [];          // vec2 uv coordinates
        slot.indices = [];      // triangle indices
        slot.vertexColor = {};  // rgba color of the slot

        // last update name and type, used to detect when attachment changes on a slot
        slot._active = { name: '', type: ATTACHMENT_TYPE.NULL };

        this.initAttachment(slot);
    };

    Spine.prototype.createMaterial = function (texture) {
        var material = new pc.StandardMaterial();
        material.shadingModel = pc.SPECULAR_BLINN;
        material.diffuse = new pc.Color(1, 1, 1); // include diffuse component, this allows lights contribution

        material.emissiveMap = texture;
        material.emissiveMapChannel = "rgb";
        material.emissiveVertexColor = true;
        material.emissiveVertexColorChannel = "rgb";

        material.opacityMap = texture;
        material.opacityMapChannel = "a";
        material.opacityVertexColor = true;
        material.opacityVertexColorChannel = "a";

        material.depthWrite = false;
        material.cull = pc.CULLFACE_NONE;
        material.blendType = pc.BLEND_PREMULTIPLIED;

        if (this._spine_3_6_0) {
            // override premultiplied chunk because images are already premultiplied however the opacity is not premultiplied by slot alpha
            var alphaPremul = [
                'gl_FragColor.rgb *= vVertexColor.a;',
                'gl_FragColor.a = dAlpha;'
            ].join('\n');
            material.chunks.outputAlphaPremulPS = alphaPremul;
        }

        material.update();
        return material;
    };

    Spine.prototype.initAttachment = function (slot) {
        var attachment = slot.attachment;
        if (attachment) {
            slot._active.name = attachment.name;
            if (attachment instanceof spine.RegionAttachment) {
                slot._active.type = ATTACHMENT_TYPE.REGION;
            } else if (attachment instanceof spine.MeshAttachment) {
                slot._active.type = ATTACHMENT_TYPE.MESH;
            }

            // create / assign material
            if (attachment.region && attachment.region.texture) {
                var texture = attachment.region.texture.pcTexture;
                if (texture) {
                    if (texture instanceof pc.StandardMaterial) {
                        this._materials[texture.name] = texture;
                        slot.material = texture.name;
                    } else {
                        // get a unique key for the texture
                        var key = null;
                        if (texture.name) {
                            key = texture.name; // texture name might not be unique - should be resolved with content
                        } else if (texture.getSource() instanceof Image) {
                            key = texture.getSource().getAttribute("src");
                        }
                        if (key) {
                            // create a new material if required
                            if (this._materials[key] === undefined) {
                                var material = this.createMaterial(texture);
                                this._materials[key] = material;
                            }
                            slot.material = key;
                        }
                    }
                }
            }
        }
    };

    Spine.prototype.updateSlot = function (slot, clipper) {
        var attachment = slot.attachment;
        var name = attachment.name;

        // attachment can change on the slot
        var type = (attachment instanceof spine.RegionAttachment) ? ATTACHMENT_TYPE.REGION : ((attachment instanceof spine.MeshAttachment) ? ATTACHMENT_TYPE.MESH : ATTACHMENT_TYPE.NULL);
        if (slot._active.name !== name || slot._active.type != type) {
            this.initAttachment(slot);
        }

        // convert vertices to world space
        slot.positions.length = 0;
        if (attachment instanceof spine.RegionAttachment) {
            attachment.computeWorldVertices(slot.bone, slot.positions, 0, 2);
        } else if (attachment instanceof spine.MeshAttachment) {
            attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, slot.positions, 0, 2);
        }

        // mesh vertex color
        var tint = this._tint[name];
        slot.vertexColor = {
            r: Math.round(255 * slot.color.r * (tint ? tint.r : 1)),
            g: Math.round(255 * slot.color.g * (tint ? tint.g : 1)),
            b: Math.round(255 * slot.color.b * (tint ? tint.b : 1)),
            a: Math.round(255 * slot.color.a * (tint ? tint.a : 1))
        };

        // indices
        var srcTriangles = attachment.triangles || QUAD_TRIANGLES;

        var i, count;

        if (clipper.isClipping()) {
            // clip triangles on CPU
            var twoColorTint = false;
            clipper.clipTriangles(slot.positions, 0, srcTriangles, srcTriangles.length, attachment.uvs, spine.Color.WHITE, spine.Color.WHITE, twoColorTint);

            // copy clipped vertex data
            slot.positions.length = 0;
            slot.uvs.length = 0;
            var vertexSize = twoColorTint ? 12 : 8;     // clipper output format
            count = clipper.clippedVertices.length;
            for (i = 0; i < count; i += vertexSize) {
                slot.positions.push(clipper.clippedVertices[i], clipper.clippedVertices[i + 1]);
                slot.uvs.push(clipper.clippedVertices[i + 6], 1 - clipper.clippedVertices[i + 7]);
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
    };

    Spine.prototype.updateSkeleton = function (dt) {

        // count verticies and triangles
        this._renderCounts.vertexCount = 0;
        this._renderCounts.indexCount = 0;

        // handle clipping start / end / range
        var clipper = this.clipper;
        var slotRangeStart = -1, slotRangeEnd = -1;
        var inRange = false;
        if (slotRangeStart == -1)
            inRange = true;

        var drawOrder = this.skeleton.drawOrder;
        var count = drawOrder.length;
        for (var i = 0; i < count; i++) {
            var slot = drawOrder[i];

            if (!this._spine_3_7_99) {
                if (!slot.bone.active) {
                    clipper.clipEndWithSlot(slot);
                    continue;
                }
            }

            if (slotRangeStart >= 0 && slotRangeStart == slot.data.index) {
                inRange = true;
            }

            if (!inRange) {
                clipper.clipEndWithSlot(slot);
                continue;
            }

            if (slotRangeEnd >= 0 && slotRangeEnd == slot.data.index) {
                inRange = false;
            }

            var attachment = slot.getAttachment();
            if (attachment instanceof spine.ClippingAttachment) {
                clipper.clipStart(slot, attachment);
                continue;
            } else if ( !(attachment instanceof spine.RegionAttachment) && !(attachment instanceof spine.MeshAttachment) ){
                if (!this._spine_3_7_99)
                    clipper.clipEndWithSlot(slot);
                continue;
            }

            // update slot geometry
            this.updateSlot(slot, clipper);
        }
    };

    Spine.prototype.render = function () {

        // remove materials from meshInstances as they keep references to meshInstances not allowing them to be GC'd
        this._meshInstances.forEach(function (instance) {
            instance.material = null;
        });

        this.removeFromLayers();
        this._meshes = [];
        this._meshInstances.length = 0;

        // any vertices / triangles to render
        if (this._renderCounts.indexCount > 0 && this._renderCounts.vertexCount > 0) {

            // update aabb
            this.skeleton.getBounds(this._aabbTempOffset, this._aabbTempSize, this._aabbTempArray);
            this._aabb.center = new pc.Vec3(this._aabbTempOffset.x, this._aabbTempOffset.y, 0);
            this._aabb.halfExtents = new pc.Vec3(0.5 * this._aabbTempSize.x, 0.5 * this._aabbTempSize.y, 0);

            // make vertex buffer at least required size
            if (!this._vertexBuffer || this._vertexBuffer.getNumVertices() < this._renderCounts.vertexCount) {
                if (this._vertexBuffer)
                    this._vertexBuffer.destroy();

                this._vertexBuffer = new pc.VertexBuffer(this._app.graphicsDevice, this._vertexFormat, this._renderCounts.vertexCount);
            }

            // make index buffer at least required size
            if (!this._indexBuffer || this._indexBuffer.getNumIndices() < this._renderCounts.indexCount) {
                if (this._indexBuffer)
                    this._indexBuffer.destroy();

                this._indexBuffer = new pc.IndexBuffer(this._app.graphicsDevice, pc.INDEXFORMAT_UINT16, this._renderCounts.indexCount);
            }

            // batching start
            var currentMaterialKey = null;
            var batchStartIndex = 0;
            var batchIndexCount = 0;

            // vertex / index buffer access
            var dstVertices = new pc.VertexIterator(this._vertexBuffer);
            var dstIndices = new Uint16Array(this._indexBuffer.lock());
            var dstIndexOffset = 0, dstVertexOffset = 0;

            var drawOrder = this.skeleton.drawOrder;
            var count = drawOrder.length;
            for (var i = 0; i < count; i++) {
                var slot = drawOrder[i];

                if (slot.attachment && slot.material && slot.positions.length > 0 && slot.indices.length > 0) {

                    // material switch
                    if (currentMaterialKey && currentMaterialKey !== slot.material) {
                        this.SubmitBatch(batchStartIndex, batchIndexCount, currentMaterialKey);

                        // prepare next batch
                        currentMaterialKey = slot.material;
                        batchStartIndex = dstIndexOffset;
                        batchIndexCount = 0;

                    }
                    currentMaterialKey = slot.material;

                    // write vertex data
                    var positions = slot.positions;
                    var r = slot.vertexColor.r, g = slot.vertexColor.g, b = slot.vertexColor.b, a = slot.vertexColor.a;
                    var uvs = slot.uvs;
                    var j, posCount = positions.length / 2;

                    for (j = 0; j < posCount; j++) {
                        dstVertices.element[pc.SEMANTIC_POSITION].set(positions[j * 2], positions[j * 2 + 1]);
                        dstVertices.element[pc.SEMANTIC_NORMAL].set(0, 255, 0, 0);      // 0,1,0 normal stored in 8 bit per component
                        dstVertices.element[pc.SEMANTIC_COLOR].set(r, g, b, a);
                        dstVertices.element[pc.SEMANTIC_TEXCOORD0].set(uvs[j * 2], uvs[j * 2 + 1]);
                        dstVertices.next();
                    }

                    // write index data
                    var indices = slot.indices;
                    var indCount = indices.length;
                    for (j = 0; j < indCount; j++)
                        dstIndices[dstIndexOffset + j] = indices[j] + dstVertexOffset;

                    batchIndexCount += indCount;
                    dstIndexOffset += indCount;
                    dstVertexOffset += posCount;
                }
            }

            dstVertices.end();
            this._indexBuffer.unlock();

            // final batch
            this.SubmitBatch(batchStartIndex, batchIndexCount, currentMaterialKey);
        }

        // add all instances to layers
        this.addToLayers();
    };

    Spine.prototype.SubmitBatch = function (indexBase, indexCount, materialKey) {
        if (indexCount > 0) {
            var mesh = new pc.Mesh();
            mesh.vertexBuffer = this._vertexBuffer;
            mesh.indexBuffer[0] = this._indexBuffer;
            mesh.primitive[0].type = pc.PRIMITIVE_TRIANGLES;
            mesh.primitive[0].base = indexBase;
            mesh.primitive[0].count = indexCount;
            mesh.primitive[0].indexed = true;
            mesh.aabb = this._aabb;
            this._meshes.push(mesh);

            var mi = new pc.MeshInstance(this._node, mesh, this._materials[materialKey]);
            mi.drawOrder = this.priority + this._meshInstances.length;
            mi.visible = !this._hidden;
            this._meshInstances.push(mi);
        }
    };

    Spine.prototype.update = function (dt) {
        if (this._hidden)
            return;

        dt *= this._timeScale;

        var i, n = this.states.length;
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
    };

    Spine.prototype.setPosition = function (p) {
        this._position.copy(p);
    };

    Spine.prototype.setTint = function (name, color) {
        this._tint[name] = color;
    };

    Spine.prototype.removeFromLayers = function () {
        if (this._model) {
            for (var i = 0; i < this._layers.length; i++) {
                var layer = this._app.scene.layers.getLayerById(this._layers[i]);
                if (layer)
                    layer.removeMeshInstances(this._model.meshInstances);
            }
        }
    };

    Spine.prototype.addToLayers = function () {
        if (this._model) {
            for (var i = 0; i < this._layers.length; i++) {
                var layer = this._app.scene.layers.getLayerById(this._layers[i]);
                if (layer)
                    layer.addMeshInstances(this._model.meshInstances);
            }
        }
    };

    Object.defineProperty(Spine.prototype, "state", {
        get: function () {
            return this.states[0];
        }
    });

    Object.defineProperty(Spine.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        }
    });

    Object.defineProperty(Spine.prototype, "timeScale", {
        get: function () {
            return this._timeScale;
        },
        set: function (value) {
            this._timeScale = value;
        }
    });

    Object.defineProperty(Spine.prototype, "layers", {
        get: function () {
            return this._layers;
        },
        set: function (value) {
            if (this._model) {
                this.removeFromLayers();
            }
            this._layers = value || [];

            if (this._model) {
                this.addToLayers();
            }
        }
    });

    return {
        Spine: Spine
    };
}());
