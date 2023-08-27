import { ComponentSystem } from 'playcanvas';

import { SpineComponent } from './SpineComponent.js';
import { SpineComponentData } from './SpineComponentData.js';

class SpineComponentSystem extends ComponentSystem {
    constructor(app) {
        super(app);

        this.id = 'spine';

        this.ComponentType = SpineComponent;
        this.DataType = SpineComponentData;

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

        this.on('beforeremove', this.onBeforeRemove, this);
        this.app.systems.on('update', this.onUpdate, this);
    }

    initializeComponentData(component, data, properties) {
        properties = [
            'enabled',
            'atlasAsset',
            'textureAssets',
            'skeletonAsset',
            'atlasData',
            'textures',
            'skeletonData',
            'spine'
        ];

        super.initializeComponentData(
            component,
            data,
            properties
        );
    }

    /**
     * @param {pc.Entity} entity - The entity with spine script attached.
     * @param {pc.Component} component - The pc component
     */
    onBeforeRemove(entity, component) {
        const data = entity.spine.data;
        if (data.spine) {
            data.spine.destroy();
        }

        entity.spine.removeComponent();
    }

    /**
     * @param {Number} dt - delta time
     */
    onUpdate(dt) {
        const components = this.store;

        for (const id in components) {
            if (components.hasOwnProperty(id)) {
                const component = components[id];
                const componentData = component.data;
                if (componentData.enabled && component.entity.enabled) {
                    if (componentData.spine) {
                        componentData.spine.setPosition(
                            component.entity.getPosition()
                        );
                        componentData.spine.update(componentData.speed * dt);
                    }
                }
            }
        }
    }
}

export { SpineComponentSystem };
