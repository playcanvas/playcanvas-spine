pc.extend(pc, function () {
    var SpineComponentSystem = function SpineComponentSystem(app) {
        pc.ComponentSystem.call(this, app);

        this.id = 'spine';

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

        pc.ComponentSystem.bind('update', this.onUpdate, this);
    };
    SpineComponentSystem.prototype = Object.create(pc.ComponentSystem.prototype);
    SpineComponentSystem.prototype.constructor = SpineComponentSystem;

    Object.assign(SpineComponentSystem.prototype, {
        initializeComponentData: function (component, data, properties) {
            properties = ['enabled', 'atlasAsset', 'textureAssets', 'skeletonAsset', 'atlasData', 'textures', 'skeletonData', 'spine'];
            pc.ComponentSystem.prototype.initializeComponentData.call(this.system, component, data, properties);
        },

        removeComponent: function (entity) {
            var data = entity.spine.data;
            if (data.spine) {
                data.spine.destroy();
            }

            entity.spine.removeComponent();
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
        }
    });

    return {
        SpineComponentSystem: SpineComponentSystem
    };
}());
