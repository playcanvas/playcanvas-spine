pc.extend(pc, function () {
    var SpineComponentSystem = function SpineComponentSystem (app) {
        this.id = 'spine';
        this.description = "";

        this.ComponentType = pc.SpineComponent;
        this.DataType = pc.SpineComponentData;

        this.schema = [
            'enabled',
            'atlasAsset',
            'textureAssets',
            'skeletonAsset',
            'atlasData',
            'textures',
            'skeletonData',
            'speed',
            'spine'
        ];

        this.on('remove', this.onRemove, this);
        // this.on('update', this.onUpdate, this);

        this.app.systems.on('update', this.onUpdate, this);
    };
    SpineComponentSystem = pc.inherits(SpineComponentSystem, pc.ComponentSystem);

    pc.extend(SpineComponentSystem.prototype, {
        initializeComponentData: function (component, data, properties) {
            properties = ['enabled', 'atlasAsset', 'textureAssets', 'skeletonAsset', 'atlasData', 'textures', 'skeletonData', 'spine'];
            SpineComponentSystem._super.initializeComponentData.call(this, component, data, properties);
        },

        removeComponent: function (entity) {
            var data = entity.spine.data;
            if (data.spine) {
                data.spine.destroy();
            }
        },

        onUpdate: function (dt) {
            var components = this.store;

            for (var id in components) {
                if (components.hasOwnProperty(id)) {
                    var component = components[id];
                    var componentData = component.data;
                    if (componentData.enabled && component.entity.enabled) {
                        if (componentData.spine) {
                            componentData.spine.setPosition(component.entity.getPosition());
                            componentData.spine.update(componentData.speed * dt);
                        }
                    }
                }
            }
        },

        onRemove: function(entity, data) {

        }
    });

    return {
        SpineComponentSystem: SpineComponentSystem
    };
}());
