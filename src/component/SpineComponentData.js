class SpineComponentData {
    constructor() {
        // serialized
        this.enabled = true;
        this.atlasAsset = null;
        this.textureAssets = [];
        this.skeletonAsset = null;
        this.speed = 1;

        // non-serialized
        this.spine = null;
        this.atlasData = null;
        this.textures = [];
        this.skeletonData = null;
    }
}

export { SpineComponentData };
