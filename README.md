# playcanvas-spine

Spine plugin for PlayCanvas Engine

## Usage

### Editor

Add the library script `lib/playcanvas-spine.min.js` to your project and add it the to your Script Priorty list.

Create an Entity with a Script Component and add the spine entity script `src/script/spline.js` to your Entity. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your Entity.

**Note:** *currently you can't upload `.atlas` files to PlayCanvas, you must rename the file `.atlas.txt` before uploading.*

### Engine-only

Include the library script `lib/playcanvas-spine.min.js`. Either use the script `src/script/spine.js` in script components or directly add spine components to your Entities.

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
