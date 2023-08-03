# PlayCanvas Spine

A [Spine](http://esotericsoftware.com/) plugin for the PlayCanvas Engine.

[![CI][ci-badge]][ci-url]

![](images/spine-man.gif)

Examples such as the Hero above can be found in the `examples` folder. To run them, start a local web server and go to `http://localhost/path/to/examples/hero.html` (the path will depend on your file serving root directory).

## Usage

### Editor

Add the files `lib/playcanvas-spine.3.6.min.js` and `lib/spine.js` to your project. Note that a 3.8 version of the library is available too.

Create an entity with a script component and add the script `spine` to it. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your entity.

### Engine-only

Load the library script `lib/playcanvas-spine.3.6.min.js`. Then, add spine components to your entities as follows:

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
