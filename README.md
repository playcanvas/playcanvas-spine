# PlayCanvas Spine

A [Spine](http://esotericsoftware.com/) plugin for the PlayCanvas Engine.

![](images/spine-man.gif)

## Usage

### Editor

Add the files `lib/playcanvas-spine.3.6.min.js` and `examples/assets/script/spine.js` to your project. 

Create an Entity with a Script Component and add the spine entity script `spine` to your Entity. Upload your exported spine resources (atlas, skeleton json file, textures) and attach them to the spine script on your Entity.

### Engine-only

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

Install package dependencies:

`npm install`

To build:

`npm run build`

## Notes

This plugin uses the spine-ts runtime and is built from version 3.6
