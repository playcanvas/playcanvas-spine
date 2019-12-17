pc.extend(pc, function () {
    var SpineComponent = function SpineComponent(system, entity) {
        pc.Component.call(this, system, entity);

        this.on("set_atlasAsset", this.onSetAsset, this);
        this.on("set_textureAssets", this.onSetAssets, this);
        this.on("set_skeletonAsset", this.onSetAsset, this);

        this.on("set_atlasData", this.onSetResource, this);
        this.on("set_textures", this.onSetResource, this);
        this.on("set_skeletonData", this.onSetResource, this);
    };
    SpineComponent.prototype = Object.create(pc.Component.prototype);
    SpineComponent.prototype.constructor = SpineComponent;

    Object.assign(SpineComponent.prototype, {
        _createSpine: function () {
            if (this.data.spine) {
                this.data.spine.destroy();
                this.data.spine = null;
            }

            var textureData = {};
            for (var i = 0, n = this.textureAssets.length; i < n; i++) {
                var asset = this.system.app.assets.get(this.textureAssets[i]);
                var path = pc.path.getBasename(asset.file.url);
                var query = path.indexOf('?');
                if (query !== -1)
                    path = path.substring(0, query);

                textureData[path] = asset.resource;
            }

            this.data.spine = new pc.Spine(this.system.app, this.atlasData, this.skeletonData, textureData);

            this.state = this.data.spine.state;
            this.states = this.data.spine.states;
            this.skeleton = this.data.spine.skeleton;

            this.entity.addChild(this.data.spine._node);
        },

        _onAssetReady: function (asset) {
            if (asset.type === "texture") {
                this.textures.push(asset.resource);
            }
            if (asset.type === "json") {
                this.skeletonData = asset.resource;
            }
            if (asset.type === "text") {
                this.atlasData = asset.resource;
            }
        },

        _onAssetAdd: function (asset) {
            asset.off('change', this.onAssetChanged, this);
            asset.on('change', this.onAssetChanged, this);

            asset.off('remove', this.onAssetRemoved, this);
            asset.on('remove', this.onAssetRemoved, this);

            asset.ready(this._onAssetReady, this);
            this.system.app.assets.load(asset);
        },

        onSetResource: function () {
            if (this.data.atlasData && this.data.textures.length && this.data.skeletonData) {
                this._createSpine();
            }
        },

        onSetAsset: function (name, oldValue, newValue) {
            var registry = this.system.app.assets;
            var asset = null;
            if (oldValue) {
                asset = registry.get(oldValue);
                if (asset) {
                    asset.off("change", this.onAssetChanged);
                    asset.off("remove", this.onAssetRemoved);
                }
            }

            if (newValue) {
                var id = newValue;
                if (newValue instanceof pc.Asset) {
                    id = newValue.id;
                    this.data[name] = id;
                }
                asset = registry.get(id);
                if (asset) {
                    this._onAssetAdd(asset);
                } else {
                    registry.on("add:" + id);
                }
            }
        },

        onSetAssets: function (name, oldValue, newValue) {
            var registry = this.system.app.assets;
            var asset = null;
            var i, n;
            if (oldValue.length) {
                for (i = 0, n = oldValue.length; i < n; i++) {
                    asset = registry.get(oldValue[i]);
                    if (asset) {
                        asset.off("change", this.onAssetChanged);
                        asset.off("remove", this.onAssetRemoved);
                    }
                }
            }

            if (newValue && newValue.length) {
                var ids = newValue.map(function (v) {
                    if (v instanceof pc.Asset) {
                        return v.id;
                    }
                    return v;
                });

                for (i = 0, n = newValue.length; i < n; i++) {
                    asset = registry.get(ids[i]);
                    if (asset) {
                        this._onAssetAdd(asset);
                    } else {
                        registry.on("add:" + ids[i]);
                    }
                }
            }
        },

        onAssetChanged: function (asset, attribute, newValue, oldValue) {

        },

        onAssetRemoved: function (asset) {

        },

        onEnable: function () {
            pc.Component.prototype.onEnable.call(this);

            var spine = this.data.spine;
            if (spine) {
                spine.addToLayers();
            }
        },

        onDisable: function () {
            pc.Component.prototype.onDisable.call(this);

            var spine = this.data.spine;
            if (spine) {
                spine.removeFromLayers();
            }
        },

        hide: function () {
            if (this.data.spine) {
                this.data.spine.hide();
            }
        },

        show: function () {
            if (this.data.spine) {
                this.data.spine.show();
            }
        },

        removeComponent: function () {
            var asset;

            if (this.atlasAsset) {
                asset = this.system.app.assets.get(this.atlasAsset);
                if (asset) {
                    asset.off("change", this.onAssetChanged);
                    asset.off("remove", this.onAssetRemoved);
                }
            }

            if (this.skeletonAsset) {
                asset = this.system.app.assets.get(this.skeletonAsset);
                if (asset) {
                    asset.off("change", this.onAssetChanged);
                    asset.off("remove", this.onAssetRemoved);
                }
            }

            if (this.textureAssets && this.textureAssets.length) {
                for (var i = 0; i < this.textureAssets.length; i++) {
                    asset = this.system.app.assets.get(this.textureAssets[i]);
                    if (asset) {
                        asset.off("change", this.onAssetChanged);
                        asset.off("remove", this.onAssetRemoved);
                    }
                }
            }
        }
    });

    return {
        SpineComponent: SpineComponent
    };
}());
