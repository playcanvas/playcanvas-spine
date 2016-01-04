pc.script.attribute("atlas", "asset", null, {type: "text", max: 1});
pc.script.attribute("skeleton", "asset", null, {type: "json", max: 1});
pc.script.attribute("textures", "asset", null, {type: "texture"});
pc.script.attribute("priority", "number", 0, {});

pc.script.create("spine", function (app) {
    var Spine = function (entity) {
        this.entity = entity;
    };

    Spine.prototype = {
        initialize: function () {
            if (this.atlas && this.textures && this.skeleton) {
                // If all assets are present, add the spine component to the entity
                this.entity.addComponent("spine", {
                    atlasAsset: this.atlas,
                    textureAssets: this.textures,
                    skeletonAsset: this.skeleton
                });

                if(this.entity.spine) {
                    this.priority = this.priority ? this.priority : 0;
                    this.entity.spine.spine.priority = this.priority;
                }
            }
        },

        update: function (dt) {

        }
    };

    return Spine;
});
