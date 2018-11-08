pc.extend(pc, function () {

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

        this._priority = 0;
        this._layers = [pc.LAYERID_UI];

        this.update(0);

        this.autoUpdate = true;

        this._model = new pc.Model();
        this._model.graph = this._node;
        this._model.meshInstances = this._meshInstances;
        this._modelChanged = true;
        this._reordered = true;

        this._hidden = false;
    };

    Spine.prototype = {
        destroy: function () {
            if (this._model) {
                this._removeFromLayers();
            }

            this._model = null;
            this._meshInstances = [];
            this.skeleton = null;
            this.stateData = null;
            this.state = null;
            this._materials = {};
            this._node = null;
        },

        hide: function () {
            if (this._hidden)
                return;

            var drawOrder = this.skeleton.drawOrder;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = drawOrder[i];
                if (! slot.current || ! slot.current.meshInstance)
                    continue;

                slot.current.meshInstance.visible = false;
            }

            this._hidden = true;
        },

        show: function () {
            if (! this._hidden)
                return;

            var drawOrder = this.skeleton.drawOrder;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = drawOrder[i];

                if (! slot.current || ! slot.current.meshInstance)
                    continue;

                slot.current.meshInstance.visible = true;
            }

            this._hidden = false;
        },

        updateSlot: function (index, slot) {
            var attachment = slot.attachment;

            // start by hiding previous mesh instance for this attachment
            // it will be unhidden later if needed
            if (slot.current && slot.current.meshInstance) {
                slot.current.meshInstance.visible = false;
            }

            // if there is no longer an attachment, abort
            if (!attachment) {
                return;
            }

            var name = attachment.name;

            if (slot.positions === undefined) {
                slot.vertices = [];
                slot.positions = [];
                slot.colorUniforms = {};
            }

            if (slot.meshes === undefined) {
                slot.current = {mesh: null, meshInstance: null}; // current active mesh/instance
                // storage for all attached mesh/instances
                slot.meshes = {};
                slot.meshInstances = {};
                slot.materials = {};
            }

            if (attachment instanceof spine.RegionAttachment) {
                // update vertices positions
                attachment.computeWorldVertices(slot.bone, slot.vertices, 0, 2);

                slot.positions = [
                    slot.vertices[0], slot.vertices[1], 0,
                    slot.vertices[2], slot.vertices[3], 0,
                    slot.vertices[4], slot.vertices[5], 0,
                    slot.vertices[6], slot.vertices[7], 0
                ];

                if (slot.meshes[name] === undefined) {
                    var options = {
                        normals: [0,1,0,0,1,0,0,1,0,0,1,0],
                        uvs: [
                            attachment.uvs[0],
                            1 - attachment.uvs[1],
                            attachment.uvs[2],
                            1 - attachment.uvs[3],
                            attachment.uvs[4],
                            1 - attachment.uvs[5],
                            attachment.uvs[6],
                            1 - attachment.uvs[7],
                        ],
                        indices: [0,3,2,2,1,0]
                    };
                    slot.meshes[name] = pc.createMesh(this._app.graphicsDevice, slot.positions, options);
                    slot.meshes[name].name = name;
                }
            } else if (attachment instanceof spine.MeshAttachment) {
                // update vertices positions
                attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, slot.vertices, 0, 2);

                var i, n, ii = 0;
                var normals = [];
                for (i = 0, n = attachment.worldVerticesLength; i < n; i += 2) {
                    slot.positions[ii] = slot.vertices[i];
                    slot.positions[ii+1] = slot.vertices[i+1];
                    slot.positions[ii+2] = 0;
                    normals[ii] = 0;
                    normals[ii+1] = 1;
                    normals[ii+2] = 0;
                    ii += 3;
                }

                if (slot.meshes[name] === undefined) {
                    // invert v value
                    var uvs = new Float32Array(attachment.uvs.length);
                    for (i = 0, n = uvs.length; i < n; i++) {
                        uvs[i] = (i % 2) ? 1 - attachment.uvs[i] : attachment.uvs[i];
                    }

                    var options = {
                        normals: normals,
                        uvs: uvs,
                        indices: attachment.triangles
                    };
                    slot.meshes[name] = pc.createMesh(this._app.graphicsDevice, slot.positions, options);
                    slot.meshes[name].name = name;
                }
            }

            // create / assign material
            if (slot.materials[name] === undefined) {
                // get the texture
                var texture = attachment.region.texture.pcTexture;
                if (texture) {
                    if (texture instanceof pc.StandardMaterial) {
                        slot.materials[name] = texture;
                        this._materials[texture.name] = texture;
                    } else {
                        // get a unique key for the texture
                        var key = null;
                        if (texture.getSource() instanceof Image) {
                            key = texture.getSource().getAttribute("src");
                        }

                        // create a new material if required
                        if (key && this._materials[key] !== undefined) {
                            slot.materials[name] = this._materials[key];
                        } else {
                            slot.materials[name] = new pc.StandardMaterial();
                            slot.materials[name].shadingModel = pc.SPECULAR_BLINN;
                            slot.materials[name].diffuse = new pc.Color(0, 0, 0); // no diffuse component should be included
                            slot.materials[name].emissiveMap = texture;
                            slot.materials[name].emissiveTint = true;
                            slot.materials[name].emissive = new pc.Color(0, 0, 0); // use non-1 value so that shader includes emissive tint
                            slot.materials[name].opacityTint = true;
                            slot.materials[name].opacity = 0; // use non-1 value so that opacity is included
                            slot.materials[name].opacityMap = texture;
                            slot.materials[name].opacityMapChannel = "a";
                            slot.materials[name].depthWrite = false;
                            slot.materials[name].cull = pc.CULLFACE_NONE;
                            slot.materials[name].blendType = pc.BLEND_PREMULTIPLIED;
                            slot.materials[name].update();

                            // override premultiplied chunk because images are already premultiplied
                            // however the material_opacity is not premultiplied by slot alpha
                            var alphaPremul = [
                                'gl_FragColor.rgb *= material_opacity;',
                                'gl_FragColor.a = dAlpha;'
                            ].join('\n');
                            slot.materials[name].chunks.outputAlphaPremulPS = alphaPremul;
                            if (key) {
                                this._materials[key] = slot.materials[name];
                            }
                        }
                    }
                }
            }

            if (slot.meshInstances[name] === undefined) {
                slot.meshInstances[name] = new pc.MeshInstance(this._node, slot.meshes[name], slot.materials[name]);
                this._meshInstances.push(slot.meshInstances[name]);
                this._modelChanged = true;
                this._reordered = true;
            }

            if (!slot.colorUniforms[name]) {
                slot.colorUniforms[name] = new Float32Array(3);
            }

            slot.colorUniforms[name][0] = slot.color.r;
            slot.colorUniforms[name][1] = slot.color.g;
            slot.colorUniforms[name][2] = slot.color.b;

            slot.meshes[name].updateVertices(slot.positions);
            slot.meshInstances[name].setParameter("material_opacity", slot.color.a);
            slot.meshInstances[name].setParameter("material_emissive", slot.colorUniforms[name]);

            // Should not be done every frame
            this._reordered = true;

            slot.current.mesh = slot.meshes[name];
            slot.current.meshInstance = slot.meshInstances[name];
            slot.current.meshInstance.visible = true;
        },

        reorder: function () {
            var drawOrder = this.skeleton.drawOrder;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = drawOrder[i];
                if (!slot.attachment) continue;
                var name = slot.attachment.name;
                var mi = slot.meshInstances[name];
                if (!mi) continue;

                mi.drawOrder = i + (this.priority * 1000);
            }
        },

        update: function (dt) {
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

            var drawOrder = this.skeleton.drawOrder;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = drawOrder[i];
                this.updateSlot(i, slot);
            }

            if (this._modelChanged && this._model) {
                this._removeFromLayers();
                this._addToLayers();
                this._modelChanged = false;
            }

            if (this._reordered) {
                this.reorder();
            }


            // reset reorder flag
            this._reordered = false;
        },

        setPosition: function (p) {
            this._position.copy(p);
        },

        _removeFromLayers: function () {
            for (var i = 0; i<this._layers.length; i++) {
                var id = this._layers[i];
                var layer = this._app.scene.layers.getLayerById(id);
                if (! layer) continue;

                layer.removeMeshInstances(this._model.meshInstances);
            }
        },

        _addToLayers: function () {
            for (var i = 0; i<this._layers.length; i++) {
                var id = this._layers[i];
                var layer = this._app.scene.layers.getLayerById(id);
                if (! layer) continue;

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
            this._reordered = true;
        }
    })

    Object.defineProperty(Spine.prototype, "layers", {
        get: function () {
            return this._layers;
        },
        set: function (value) {
            if (this._model) {
                this._removeFromLayers();
            }
            this._layers = value || [];

            if (this._model) {
                this._addToLayers();
            }
        }
    });

    return {
        Spine: Spine
    };

}());
