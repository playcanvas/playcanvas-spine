pc.extend(pc, function () {
    var createSortFn = function (index, priority, factor) {
        return function () {
            var d = 0;
            if (priority === 0)
                d = this.distSqr; // only use the distance if using default priorities

            return index + (priority*factor) - d;
        };
    };

    var TextureLoader = function (textureData) {
        this._textureData = textureData;
    };
    TextureLoader.prototype = {
        load: function (page, path, atlas) {
            var texture = this._textureData[path];
            if (texture) {
                page.rendererObject = texture;
                page.width = texture.width;
                page.height = texture.height;
                atlas.updateUVs(page);
            }
        },

        unload: function (texture) {
            texture.destroy();
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

        var atlas = new spine.Atlas(atlasData, new TextureLoader(textureData));
        var json = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(atlas));
        json.scale *= 0.01;
        var _skeletonData = json.readSkeletonData(skeletonData);
        this.skeleton = new spine.Skeleton(_skeletonData);
        this.skeleton.updateWorldTransform();

        this.stateData = new spine.AnimationStateData(this.skeleton.data);

        this.states = [new spine.AnimationState(this.stateData)]

        this._node = new pc.GraphNode();

        this._meshInstances = [];
        this._materials = {};

        this._priority = 0;

        this.update(0);

        this.autoUpdate = true;

        this._model = new pc.Model();
        this._model.graph = this._node;
        this._model.meshInstances = this._meshInstances;
        this._modelChanged = true;
        this._reordered = true;

    };

    Spine.prototype = {
        destroy: function () {
            this._app.scene.removeModel(this._model);

            this._model = null;
            this._meshInstances = [];
            this.skeleton = null;
            this.stateData = null;
            this.state = null;
            this._materials = {};
            this._node = null;
        },

        updateSlot: function (index, slot) {
            var attachment = slot.attachment;

            // start by hiding previous mesh instance for this attachment
            // it will be unhidden later if needed
            if (slot.current && slot.current.meshInstance) {
                slot.current.meshInstance._hidden = true;
            }

            // if there is no longer an attachment, abort
            if (!attachment) {
                return;
            }

            var name = attachment.name;

            if (slot.positions === undefined) {
                slot.vertices = [];
                slot.positions = [];
            }

            if (slot.meshes === undefined) {
                slot.current = {mesh: null, meshInstance: null}; // current active mesh/instance
                // storage for all attached mesh/instances
                slot.meshes = {};
                slot.meshInstances = {};
                slot.materials = {};
            }

            // update vertices positions
            if (attachment.computeVertices) {
                attachment.computeVertices(this.skeleton.x, this.skeleton.y, slot.bone, slot.vertices);
            }
            if (attachment.computeWorldVertices) {
                attachment.computeWorldVertices(this.skeleton.x, this.skeleton.y, slot, slot.vertices);
            }
            if (attachment instanceof spine.RegionAttachment) {
                slot.positions = [
                    slot.vertices[0], slot.vertices[1], this._position.z,
                    slot.vertices[2], slot.vertices[3], this._position.z,
                    slot.vertices[4], slot.vertices[5], this._position.z,
                    slot.vertices[6], slot.vertices[7], this._position.z
                ]

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
                    }
                    slot.meshes[name] = pc.createMesh(this._app.graphicsDevice, slot.positions, options);
                    slot.meshes[name].name = name;
                }
            } else if (attachment instanceof spine.SkinnedMeshAttachment ||
                attachment instanceof spine.MeshAttachment) {
                var ii = 0;
                var normals = []
                for (var i = 0, n = slot.vertices.length; i < n; i += 2) {
                    slot.positions[ii] = slot.vertices[i];
                    slot.positions[ii+1] = slot.vertices[i+1];
                    slot.positions[ii+2] = this._position.z;
                    normals[ii] = 0;
                    normals[ii+1] = 1;
                    normals[ii+2] = 0;
                    ii += 3;
                }

                if (slot.meshes[name] === undefined) {
                    // invert v value
                    var uvs = attachment.uvs.map(function (item, index) {
                        if (index % 2) {
                            return 1 - item;
                        }

                        return item;
                    });

                    var options = {
                        normals: normals,
                        uvs: uvs,
                        indices: attachment.triangles.reverse()
                    };
                    slot.meshes[name] = pc.createMesh(this._app.graphicsDevice, slot.positions, options);
                    slot.meshes[name].name = name;
                }
            }

            // create / assign material
            if (slot.materials[name] === undefined) {
                // get the texture
                var texture = attachment.rendererObject.page.rendererObject;
                if (texture) {
                    if (texture instanceof pc.PhongMaterial) {
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
                            slot.materials[name] = new pc.PhongMaterial();
                            slot.materials[name].shadingModel = pc.SPECULAR_BLINN;
                            slot.materials[name].diffuseMap = texture;
                            slot.materials[name].opacityMap = texture;
                            slot.materials[name].opacityMapChannel = "a";
                            slot.materials[name].depthWrite = false;
                            slot.materials[name].cull = pc.CULLFACE_NONE;
                            slot.materials[name].blendType = pc.BLEND_PREMULTIPLIED;
                            slot.materials[name].update();
                            // override premultiplied chunk because images are already premultiplied
                            slot.materials[name].chunks.outputAlphaPremulPS = pc.shaderChunks.outputAlphaPS

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

            slot.meshes[name].updateVertices(slot.positions);

            slot.current.mesh = slot.meshes[name];
            slot.current.meshInstance = slot.meshInstances[name];
            slot.current.meshInstance._hidden = false;
        },

        reorder: function () {
            var drawOrder = this.skeleton.drawOrder;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = drawOrder[i];
                if (!slot.attachment) continue;
                var name = slot.attachment.name;
                var mi = slot.meshInstances[name];
                if (!mi) continue;

                mi.compare = createSortFn(i, this.priority, 1000);
            }
        },

        update: function (dt) {
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
                this._app.scene.removeModel(this._model);
                this._app.scene.addModel(this._model);
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
    return {
        Spine: Spine
    };

}());
