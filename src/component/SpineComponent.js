/* eslint-disable operator-linebreak */
import { Asset, Component, path as resourcePath } from 'playcanvas';

import { Spine } from './Spine.js';

class SpineComponent extends Component {
    constructor(system, entity) {
        super(system, entity);

        this.on('set_atlasAsset', this.onSetAsset, this);
        this.on('set_textureAssets', this.onSetAssets, this);
        this.on('set_skeletonAsset', this.onSetAsset, this);

        this.on('set_atlasData', this.onSetResource, this);
        this.on('set_textures', this.onSetResource, this);
        this.on('set_skeletonData', this.onSetResource, this);
    }

    _createSpine() {
        if (this.data.spine) {
            this.data.spine.destroy();
            this.data.spine = null;
        }

        const textureData = {};
        for (let i = 0, n = this.textureAssets.length; i < n; i++) {
            const asset = this.system.app.assets.get(this.textureAssets[i]);

            let path = asset.name
                ? asset.name
                : asset.file
                    ? asset.file.filename
                    : null;

            // Fallback if filename doesn't exist
            if (!path) {
                path = resourcePath.getBasename(asset.file.url);
            }

            const query = path.indexOf('?');
            if (query !== -1) path = path.substring(0, query);

            textureData[path] = asset.resource;
        }

        this.data.spine = new Spine(
            this.system.app,
            this.atlasData,
            this.skeletonData,
            textureData
        );

        this.state = this.data.spine.state;
        this.states = this.data.spine.states;
        this.skeleton = this.data.spine.skeleton;

        this.entity.addChild(this.data.spine._node);
    }

    _onAssetReady({ type, resource }) {
        if (type === 'texture') {
            this.textures.push(resource);
        }
        if (type === 'json') {
            this.skeletonData = resource;
        }
        if (type === 'text') {
            this.atlasData = resource;
        }
    }

    _onAssetAdd(asset) {
        asset.off('change', this.onAssetChanged, this);
        asset.on('change', this.onAssetChanged, this);

        asset.off('remove', this.onAssetRemoved, this);
        asset.on('remove', this.onAssetRemoved, this);

        asset.ready(this._onAssetReady, this);
        this.system.app.assets.load(asset);
    }

    onSetResource() {
        if (
            this.data.atlasData &&
            this.data.textures.length &&
            this.data.skeletonData
        ) {
            this._createSpine();
        }
    }

    onSetAsset(name, oldValue, newValue) {
        const registry = this.system.app.assets;
        let asset = null;
        if (oldValue) {
            asset = registry.get(oldValue);
            if (asset) {
                asset.off('change', this.onAssetChanged);
                asset.off('remove', this.onAssetRemoved);
            }
        }

        if (newValue) {
            let id = newValue;
            if (newValue instanceof Asset) {
                id = newValue.id;
                this.data[name] = id;
            }
            asset = registry.get(id);
            if (asset) {
                this._onAssetAdd(asset);
            } else {
                registry.on(`add:${id}`);
            }
        }
    }

    onSetAssets(name, oldValue, newValue) {
        const registry = this.system.app.assets;
        let asset = null;
        let i;
        let n;
        if (oldValue.length) {
            for (i = 0, n = oldValue.length; i < n; i++) {
                asset = registry.get(oldValue[i]);
                if (asset) {
                    asset.off('change', this.onAssetChanged);
                    asset.off('remove', this.onAssetRemoved);
                }
            }
        }

        if (newValue && newValue.length) {
            const ids = newValue.map((v) => {
                if (v instanceof Asset) {
                    return v.id;
                }
                return v;
            });

            for (i = 0, n = newValue.length; i < n; i++) {
                asset = registry.get(ids[i]);
                if (asset) {
                    this._onAssetAdd(asset);
                } else {
                    registry.on(`add:${ids[i]}`);
                }
            }
        }
    }

    onAssetChanged(asset, attribute, newValue, oldValue) {}

    onAssetRemoved(asset) {}

    onEnable() {
        Component.prototype.onEnable.call(this);

        const spine = this.data.spine;
        if (spine) {
            spine.addToLayers();
        }
    }

    onDisable() {
        Component.prototype.onDisable.call(this);

        const spine = this.data.spine;
        if (spine) {
            spine.removeFromLayers();
        }
    }

    hide() {
        if (this.data.spine) {
            this.data.spine.hide();
        }
    }

    show() {
        if (this.data.spine) {
            this.data.spine.show();
        }
    }

    removeComponent() {
        let asset;

        if (this.atlasAsset) {
            asset = this.system.app.assets.get(this.atlasAsset);
            if (asset) {
                asset.off('change', this.onAssetChanged);
                asset.off('remove', this.onAssetRemoved);
            }
        }

        if (this.skeletonAsset) {
            asset = this.system.app.assets.get(this.skeletonAsset);
            if (asset) {
                asset.off('change', this.onAssetChanged);
                asset.off('remove', this.onAssetRemoved);
            }
        }

        if (this.textureAssets && this.textureAssets.length) {
            for (let i = 0; i < this.textureAssets.length; i++) {
                asset = this.system.app.assets.get(this.textureAssets[i]);
                if (asset) {
                    asset.off('change', this.onAssetChanged);
                    asset.off('remove', this.onAssetRemoved);
                }
            }
        }
    }
}

export { SpineComponent };
