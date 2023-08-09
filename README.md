# PlayCanvas Spine

A [Spine](http://esotericsoftware.com/) plugin for the PlayCanvas Engine.

[![CI][ci-badge]][ci-url]

![](images/spine-man.gif)

Examples such as the Hero above can be found in the `examples` folder. To run them, start a local web server and go to `http://localhost/path/to/examples/hero.html` (the path will depend on your file serving root directory).

## Usage

### Editor

Add the plugin matching the Spine version used to export the animations, i.e `build/playcanvas-spine.X.X.min.js` and the Playcanvas script `build/spine.js` to your project. The following plugins are available:

| Spine Editor | PlayCanvas Engine |
| ------------ | ----------------- |
| 3.6          | Up to 1.65        |
| 3.8          | Up to 1.65        |
| 4.1          | 1.27 and later    |

Create an entity with a script component and add the script `spine` to it. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your entity.

Ensure the plugin file is listed before the PlayCanvas script in the [Scripts Loading Order](https://developer.playcanvas.com/en/user-manual/scripting/loading-order/).

### Engine-only

Load the required library script, i.e `build/playcanvas-spine.X.X.min.js`. Then, add spine components to your entities as follows:

```javascript
var entity = new pc.Entity();
entity.addComponent("spine", {
    atlasAsset: atlas,       // atlas text asset id
    textureAssets: textures, // array of texture asset ids
    skeletonAsset: skeleton  // skeleton json asset id
});
```

## Building

Prebuilt versions of the PlayCanvas Spine library can be found in the `lib` folder. However, to build them yourself, first install the NPM package dependencies:

`npm install`

Then, to build do:

`npm run build`


[ci-badge]: https://github.com/playcanvas/playcanvas-spine/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/playcanvas/playcanvas-spine/actions/workflows/ci.yml
