// block scoped, so that loading the script again, as a launched app does when the script changes,
// does not declare Spine twice
{
    const Spine = pc.createScript('spine');

    Spine.attributes.add('atlas', { type: 'asset', assetType: 'text' });
    Spine.attributes.add('skeleton', { type: 'asset', assetType: 'json' });
    Spine.attributes.add('skeletonBinary', {
        type: 'asset',
        assetType: 'binary',
        title: 'Skeleton Binary',
        description: 'A skeleton exported in the binary .skel format, used instead of the json skeleton. Requires the Spine 4.3 plugin.'
    });
    Spine.attributes.add('textures', { type: 'asset', array: true, assetType: 'texture' });
    Spine.attributes.add('priority', { type: 'number', default: 1 });
    Spine.attributes.add('physicsInheritance', {
        type: 'boolean',
        default: false,
        title: 'Physics Inheritance',
        description: 'Passes the movement and rotation of the entity to the physics constraints of the skeleton, so that physics driven parts such as hair react when the entity moves. Requires the Spine 4.3 plugin.'
    });

    Spine.prototype.initialize = function () {
        const skeleton = this.skeletonBinary || this.skeleton;
        if (this.atlas && this.textures && skeleton) {
            // If all assets are present, add the spine component to the entity
            this.entity.addComponent('spine', {
                atlasAsset: this.atlas.id,
                textureAssets: this.textures.map(asset => asset.id),
                skeletonAsset: skeleton.id
            });

            if (this.entity.spine) {
                this.priority = this.priority ? this.priority : 0;
                this.entity.spine.spine.priority = this.priority;

                // when disabled, the inheritance is left to scripts, which can set it in code
                if (this.physicsInheritance) {
                    this.setPhysicsInheritance(true);
                }
            }
        }

        this.on('attr:priority', (value) => {
            if (this.entity.spine) {
                this.entity.spine.spine.priority = value;
            }
        });

        this.on('attr:physicsInheritance', (value) => {
            this.setPhysicsInheritance(value);
        });
    };

    // passes the movement of the entity to the physics constraints of the skeleton, or stops passing it
    Spine.prototype.setPhysicsInheritance = function (enabled) {
        if (!this.entity.spine) {
            return;
        }

        const skeletonPhysics = this.entity.spine.spine.skeletonPhysics;
        if (!skeletonPhysics) {
            if (enabled) {
                console.warn('spine: Physics Inheritance requires the Spine 4.3 plugin.');
            }
            return;
        }

        const value = enabled ? 1 : 0;
        skeletonPhysics.setPositionInheritance(value, value);
        skeletonPhysics.rotationInheritance = value;
    };
}
