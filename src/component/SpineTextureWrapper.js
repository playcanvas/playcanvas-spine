import {
    FILTER_NEAREST,
    FILTER_LINEAR,
    FILTER_NEAREST_MIPMAP_NEAREST,
    FILTER_LINEAR_MIPMAP_NEAREST,
    FILTER_NEAREST_MIPMAP_LINEAR,
    FILTER_LINEAR_MIPMAP_LINEAR,
    ADDRESS_MIRRORED_REPEAT,
    ADDRESS_CLAMP_TO_EDGE,
    ADDRESS_REPEAT
} from 'playcanvas';

const TO_TEXTURE_FILTER = {
    9728: FILTER_NEAREST,
    9729: FILTER_LINEAR,
    9984: FILTER_NEAREST_MIPMAP_NEAREST,
    9985: FILTER_LINEAR_MIPMAP_NEAREST,
    9986: FILTER_NEAREST_MIPMAP_LINEAR,
    9987: FILTER_LINEAR_MIPMAP_LINEAR
};

const TO_UV_WRAP_MODE = {
    33648: ADDRESS_MIRRORED_REPEAT,
    33071: ADDRESS_CLAMP_TO_EDGE,
    10487: ADDRESS_REPEAT
};

class SpineTextureWrapper {
    constructor(texture) {
        this._image = {
            width: texture.width,
            height: texture.height
        };

        this.pcTexture = texture;
    }

    setFilters(minFilter, magFilter) {
        this.pcTexture.minFilter = TO_TEXTURE_FILTER[minFilter];
        this.pcTexture.magFilter = TO_TEXTURE_FILTER[magFilter];
    }

    setWraps(uWrap, vWrap) {
        this.pcTexture.addressU = TO_UV_WRAP_MODE[uWrap];
        this.pcTexture.addressV = TO_UV_WRAP_MODE[vWrap];
    }

    getImage() {
        return this._image;
    }

    dispose() {
        // spine 4.1
        this.pcTexture.destroy();
    }
}

export { SpineTextureWrapper };
