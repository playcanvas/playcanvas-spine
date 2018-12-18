pc.extend(pc, function () {

    var ATTACHMENT_TYPE = {
        NULL: 0,
        MESH: 1,
        REGION: 2
    }

    var TO_TEXTURE_FILTER = {
        9728: pc.FILTER_NEAREST,
        9729: pc.FILTER_LINEAR,
        9987: pc.FILTER_LINEAR_MIPMAP_LINEAR,
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

    /**
     * @class
     * @name SpineTextureWrapper
     * @description Implement Spine's interface for textures
     * @param {pc.Texture} texture A PlayCanvas Texture
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
    * @class
    * @name pc.Spine
    * @description A Spine animation object.
    * Contains the skeleton and animation states as detailed in the Spine Runtime documentation
    * @param {String} atlasData Text data loaded from the atlas file
    * @param {Object} skeletonData JSON data loaded from the skeleton file
    * @param {Object} textureData Texture initialization data. An object where the key is the texture filename and the value is the pc.Texture resource
    * @property skeleton The Skeleton object
    * @property {AnimationState} state The first AnimationState object. There is always one AnimationState
    * @property {AnimationState[]} states A list of all AnimationState objects.
    * @property {Number} priority An integer value which determines when the animation is rendered relative to other Spine animations. Lower numbers are rendered first.
    * @property {Boolean} autoUpdate Determines whether the Spine object calls skeleton.updateWorldTransform in the update loop. Default is true.
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
        this.skeleton = new spine.Skeleton(_skeletonData);
        this.skeleton.updateWorldTransform();

        this.stateData = new spine.AnimationStateData(this.skeleton.data);

        this.states = [new spine.AnimationState(this.stateData)];

        this._node = new pc.GraphNode();

        this._meshInstances = [];
        this._materials = {};
        this._offset = {};

        this._priority = 0;
        this._layers = [pc.LAYERID_UI];

        this.init();

        this.autoUpdate = true;

        this._model = new pc.Model();
        this._model.graph = this._node;
        this._model.meshInstances = this._meshInstances;
        this._modelChanged = true;
        this._reordered = true;

        this._hidden = false;
    };

    Spine.prototype.destroy = function () {
        if (this._model) {
            this.removeFromLayers();
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

        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, n = drawOrder.length; i < n; i++) {
            var slot = drawOrder[i];
            if (!slot.current || !slot.current.meshInstance)
                continue;

            slot.current.meshInstance.visible = false;
        }

        this._hidden = true;
    };

    Spine.prototype.show = function () {
        if (!this._hidden)
            return;

        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, n = drawOrder.length; i < n; i++) {
            var slot = drawOrder[i];

            if (!slot.current || !slot.current.meshInstance)
                continue;

            slot.current.meshInstance.visible = true;
        }

        this._hidden = false;
    };

    Spine.prototype.init = function () {
        this.rebuildMeshes();
        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, n = drawOrder.length; i < n; i++) {
            this.initSlot(drawOrder[i]);
        }
    };

    Spine.prototype.initSlot = function (slot) {
        slot.vertices = [];
        slot.positions = [];
        slot.options = {};
        slot.colorUniforms = {};

        // assotiated mesh, num of vertices and offset in mat. mesh
        slot.current = { mesh: null, vertices: 0, offset: 0 };
        // last update name and type
        slot._active = { name: '', type: ATTACHMENT_TYPE.NULL };

        this.initAttachment(slot);
    };

    var _remapUV = function (e, i) { return (i % 2) ? 1 - e : e; };
    var _genNormals = function (e, i) { return (i % 3) == 1 ? 1 : 0; };

    Spine.prototype.initAttachment = function (slot) {
        var attachment = slot.attachment;
        if (!attachment)
            return;

        var name = attachment.name;
        slot._active.name = name;

        if (attachment instanceof spine.RegionAttachment) {
            slot._active.type = ATTACHMENT_TYPE.REGION;
            slot.positions = new Array(12);
            slot.options = {
                normals: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                uvs: attachment.uvs.map(_remapUV),
                colors: Array(16),
                indices: [0, 3, 2, 2, 1, 0]
            };
        } else if (attachment instanceof spine.MeshAttachment) {
            slot._active.type = ATTACHMENT_TYPE.MESH;
            var size = attachment.worldVerticesLength / 2;
            slot.positions = new Array(3 * size);
            slot.options = {
                normals: new Array(3 * size).map(_genNormals),
                uvs: attachment.uvs.map(_remapUV),
                colors: Array(4 * size),
                indices: attachment.triangles
            };
        }

        // create / assign material
        var texture = attachment.region.texture.pcTexture;
        if (texture) {
            if (texture instanceof pc.StandardMaterial) {
                this._materials[texture.name] = texture;
                slot.material = texture.name;
            } else {
                // get a unique key for the texture
                var key = null;
                if (texture.getSource() instanceof Image) {
                    key = texture.getSource().getAttribute("src");
                }
                if (key) {
                    // create a new material if required
                    if (this._materials[key] === undefined) {
                        var material = new pc.StandardMaterial();
                        material.shadingModel = pc.SPECULAR_BLINN;
                        material.diffuse = new pc.Color(0, 0, 0); // no diffuse component should be included

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
                        material.update();

                        // override premultiplied chunk because images are already premultiplied
                        // however the opacity is not premultiplied by slot alpha
                        var alphaPremul = [
                            'gl_FragColor.rgb *= vVertexColor.a;',
                            'gl_FragColor.a = dAlpha;'
                        ].join('\n');
                        material.chunks.outputAlphaPremulPS = alphaPremul;
                        this._materials[key] = material;
                        this._offset[key] = 0;
                    }
                    slot.material = key;
                }
            }
        }
        this._modelChanged = true;
    };

    Spine.prototype.rebuildMeshes = function () {
        this.removeFromLayers();
        this._meshes = {};
        this._meshInstances.length = 0;
        for (var m in this._materials) {
            if (this._materials.hasOwnProperty(m)) {
                this.createMesh(m);
            }
        }
        this.addToLayers();
    };

    var _countMeshComponents = function (acc, slot) {
        if (slot.attachment && slot.material === material) {
            acc.pos += slot.positions.length;
            acc.norm += slot.options.normals.length;
            acc.idx += slot.options.indices.length;
            acc.uv += slot.options.uvs.length;
            acc.col += slot.options.colors.length;
        }
        return acc;
    };

    var _copyArray = function (source, target, offset, incr) {
        for (var i = 0, len = source.length; i < len; i++) {
            target[offset + i] = source[i];
            if (incr)
                target[offset + i] += incr;
        }
        return source.length;
    };

    var _populateMeshComponents = function (acc, slot) {
        if (slot.attachment && slot.material === material) {
            slot.current.offset = acc.pos / 3;
            slot.current.vertices = slot.positions.length / 3;

            acc.idx += _copyArray(slot.options.indices, acc.options.indices, acc.idx, slot.current.offset);
            acc.pos += _copyArray(slot.positions, acc.positions, acc.pos, 0);
            acc.norm += _copyArray(slot.options.normals, acc.options.normals, acc.norm, 0);
            acc.uv += _copyArray(slot.options.uvs, acc.options.uvs, acc.uv, 0);
            acc.col += _copyArray(slot.options.colors, acc.options.colors, acc.col, 0);
        }
        return acc;
    }

    Spine.prototype.createMesh = function (material) {
        var drawOrder = this.skeleton.drawOrder;
        var num = drawOrder.reduce(_countMeshComponents, { pos: 0, norm: 0, idx: 0, uv: 0, col: 0 });

        var positions = Array(num.pos),
            options = {
                normals: Array(num.norm),
                uvs: new Float32Array(num.uv),
                indices: Array(num.idx),
                colors: Array(num.col)
            };

        drawOrder.reduce(_populateMeshComponents,
            { pos: 0, norm: 0, idx: 0, uv: 0, col: 0, positions: positions, options: options });

        this._meshes[material] = pc.createMesh(this._app.graphicsDevice, positions, options);
        this._meshes[material].name = material;
        var mi = new pc.MeshInstance(this._node, this._meshes[material], this._materials[material]);
        this._meshInstances.push(mi);
    };

    Spine.prototype.updateMeshes = function () {
        var m;
        for (m in this._meshes) {
            if (this._meshes.hasOwnProperty(m)) {
                this._meshes[m].startUpdate();
            }
        }
        var drawOrder = this.skeleton.drawOrder;
        for (var i = 0, len = drawOrder.length; i < len; i++) {
            var slot = drawOrder[i];
            if (slot.attachment && slot.current.mesh) {
                slot.current.mesh.updateVertices(slot.positions, null, null, null, slot.options.colors);
            }
        }
        for (m in this._meshes) {
            if (this._meshes.hasOwnProperty(m)) {
                this._meshes[m].finishUpdate();
            }
        }
    };

    Spine.prototype.updateSlot = function (slot) {
        var attachment = slot.attachment;
        // if there is no longer an attachment, abort
        if (!attachment) {
            if (slot._active.type != ATTACHMENT_TYPE.NULL) {
                slot.current = { mesh: null, vertices: 0, offset: 0 };
                slot._active = { name: '', type: ATTACHMENT_TYPE.NULL };
                this._modelChanged = true;
            }
            return;
        }
        var name = attachment.name;
        var type = (attachment instanceof spine.RegionAttachment) ? ATTACHMENT_TYPE.REGION :
            ((attachment instanceof spine.MeshAttachment) ? ATTACHMENT_TYPE.MESH : ATTACHMENT_TYPE.NULL);

        if (slot._active.name !== name || slot._active.type != type) {
            this.initAttachment(slot);
        }

        // update vertices positions, colors, opacity
        var i, n, ii = 0, ic = 0;
        if (type === ATTACHMENT_TYPE.REGION) {
            attachment.computeWorldVertices(slot.bone, slot.vertices, 0, 2);
            n = 8;
        } else if (type === ATTACHMENT_TYPE.MESH) {
            attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, slot.vertices, 0, 2);
            n = attachment.worldVerticesLength;
        }
        for (i = 0; i < n; i += 2, ii += 3, ic += 4) {
            slot.positions[ii + 0] = slot.vertices[i + 0];
            slot.positions[ii + 1] = slot.vertices[i + 1];
            slot.positions[ii + 2] = 0;
            slot.options.colors[ic + 0] = Math.round(255 * slot.color.r);
            slot.options.colors[ic + 1] = Math.round(255 * slot.color.g);
            slot.options.colors[ic + 2] = Math.round(255 * slot.color.b);
            slot.options.colors[ic + 3] = Math.round(255 * slot.color.a);
        }

        var mat = slot.material;
        var mesh = this._meshes[mat];
        var vertices = slot.positions.length / 3;
        var offset = this._offset[mat];

        if (slot.current.offset !== offset || slot.current.vertices !== vertices) {
            this._reordered = true;
        }

        this._offset[mat] += vertices;
        slot.current.mesh = mesh;
    };

    Spine.prototype.update = function (dt) {
        if (this._hidden)
            return;

        for (var i = 0, n = this.states.length; i < n; i++) {
            this.states[i].update(dt);
        }
        for (var i = 0, n = this.states.length; i < n; i++) {
            this.states[i].apply(this.skeleton);
        }
        if (this.autoUpdate)
            this.skeleton.updateWorldTransform();

        for (var m in this._materials) {
            if (this._materials.hasOwnProperty(m)) {
                this._offset[m] = 0;
            }
        }

        var i, drawOrder = this.skeleton.drawOrder, n = drawOrder.length;
        for (i = 0; i < n; i++) {
            this.updateSlot(drawOrder[i]);
        }

        if (this._modelChanged || this._reordered) {
            this.rebuildMeshes();
            this._modelChanged = false;
            this._reordered = false;
        } else {
            this.updateMeshes();
        }
    };

    Spine.prototype.setPosition = function (p) {
        this._position.copy(p);
    };

    Spine.prototype.removeFromLayers = function () {
        if (!this._model) return;

        for (var i = 0; i < this._layers.length; i++) {
            var id = this._layers[i];
            var layer = this._app.scene.layers.getLayerById(id);
            if (!layer) continue;

            layer.removeMeshInstances(this._model.meshInstances);
        }
    };

    Spine.prototype.addToLayers = function () {
        if (!this._model) return;

        for (var i = 0; i < this._layers.length; i++) {
            var id = this._layers[i];
            var layer = this._app.scene.layers.getLayerById(id);
            if (!layer) continue;

            layer.addMeshInstances(this._model.meshInstances);
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
            this._reordered = true;
        }
    })

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
