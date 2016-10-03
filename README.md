# playcanvas-spine

Spine plugin for PlayCanvas Engine

## Usage

### Editor

Add the library script `lib/playcanvas-spine.min.js` to your project and add it the to your Script Priorty list.
Add the library script `lib/patch.js` to your project and add it to your Script Priority list.

Create an Entity with a Script Component and add the spine entity script `src/script/spline.js` to your Entity. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your Entity.

### Engine-only

Include the library script `lib/playcanvas-spine.min.js` and `lib/patch.js`. Either use the script `src/script/spine.js` in script components or directly add spine components to your Entities.

```javascript
var entity = new pc.Entity();
entity.addComponent("spine", {
    atlasAsset: atlas, // atlas text asset
    textureAssets: textures,  // texture assets
    skeletonAsset: skeleton // skeleton json asset
});
```

## Building

If you don't already have it installed, install Grunt.

`npm -g install grunt`

Install package dependencies

`npm install`

Run grunt to build

`grunt`

## Notes

This is currently using the legacy script format for PlayCanvas. Contact us on the [forum](http://forum.playcanvas.com) if you want to see a "Scripts 2.0" version.

The version of the spine-js runtime in the this library is modified from the version on Esoteric's github page. Mainly to fix a couple of bugs in the mesh animation rendering.
