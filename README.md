# PlayCanvas Spine

A [Spine](http://esotericsoftware.com/) plugin for the PlayCanvas Engine.

[![CI][ci-badge]][ci-url]

See the [Spine page](https://developer.playcanvas.com/user-manual/2D/spine/) of the PlayCanvas User Manual for how to use the plugin in the Editor and in engine-only projects, including the texture setup, controlling animations and the changes in Spine 4.3.

See the [examples](https://playcanvas.github.io/playcanvas-spine/examples/) for each supported Spine version. To run them locally, run `npm run serve` and open `http://localhost:8080/examples/`.

## Usage

### Versions

Use the plugin matching the version of the Spine Editor the animations were exported with:

| Spine Editor | Plugin                    |
| ------------ | ------------------------- |
| 4.3          | `playcanvas-spine.4.3.js` |
| 4.2          | `playcanvas-spine.4.2.js` |
| 4.1          | `playcanvas-spine.4.1.js` |
| 4.0          | `playcanvas-spine.4.0.js` |
| 3.8          | `playcanvas-spine.3.8.js` |
| 3.6          | `playcanvas-spine.3.6.js` |

All plugins are tested with PlayCanvas Engine 2.23.1, on WebGL2 and WebGPU.

Each plugin provides both a Component System to PlayCanvas Engine and the corresponding `spine-core` runtime to your scripts as global variable called `spine`.  This allows developers to leverage the full spine library.

Load the atlas textures with sRGB enabled for the 3.6 to 4.2 plugins, which is the default for textures imported into the Editor, and with sRGB disabled for the 4.3 plugin. Otherwise the skeletons do not render with the right colors.

### Spine 4.3

The 4.3 plugin renders using the `SkeletonRendererCore` of the spine-core runtime, which adds support for slot blend modes and tint black. Atlases exported with and without premultiplied alpha are both supported.

Spine 4.3 changed parts of the spine-core API, for example `skeleton.setToSetupPose()` is now `skeleton.setupPose()`, so scripts using the `spine` global need updating. See the [Spine Runtimes changelog](https://github.com/EsotericSoftware/spine-runtimes/blob/4.3/CHANGELOG.md) for details. Instead of `setTint`, which only logs a warning in the 4.3 plugin, use the colors of the spine-core runtime: `skeleton.color` for the whole skeleton, `skeleton.findSlot(name).getPose().color` for a slot and the `color` of an attachment, from `skeleton.getAttachment(slotName, attachmentName)`.

Like the Spine Editor and the Spine Runtimes, the 4.3 plugin renders in gamma space, so the atlas textures need to be loaded with sRGB disabled. In the Editor, disable sRGB on the imported texture assets. The plugin logs a warning when an atlas texture is sRGB.

### Editor

Add the plugin matching the Spine version used to export the animations, i.e `build/playcanvas-spine.X.X.min.js` and the PlayCanvas script `build/spine.js` to your project.

Create an entity with a script component and add the script `spine` to it. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your entity.

Ensure the plugin file is listed before the PlayCanvas script in the [Scripts Loading Order](https://developer.playcanvas.com/user-manual/editor/scripting/loading-order/).

### Engine-only

Load the required library script, i.e. `build/playcanvas-spine.X.X.min.js`. Then, add spine components to your entities as follows:

```javascript
var entity = new pc.Entity();
entity.addComponent("spine", {
    atlasAsset: atlas,       // atlas text asset id
    textureAssets: textures, // array of texture asset ids
    skeletonAsset: skeleton  // skeleton json asset id
});
```

## Building

Prebuilt versions of the PlayCanvas Spine library can be found in the `build` folder. However, to build them yourself, first install the NPM package dependencies:

`npm install`

Then, to build do:

`npm run build`


[ci-badge]: https://github.com/playcanvas/playcanvas-spine/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/playcanvas/playcanvas-spine/actions/workflows/ci.yml
