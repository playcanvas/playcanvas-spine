// Shaders for the Spine 4.3 renderer. Spine computes colors in gamma space with premultiplied
// alpha, including its two color tint, so the fragment shaders do the same and then convert the
// result to linear space for the camera tone mapping and output gamma.

const vertexGLSL = /* glsl */`
attribute vec2 vertex_position;
attribute vec2 vertex_texCoord0;
attribute vec4 vertex_color;
attribute vec4 vertex_darkColor;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

varying vec2 vUv0;
varying vec4 vLight;
varying vec4 vDark;

void main(void) {
    vUv0 = vertex_texCoord0;
    vLight = vertex_color;
    vDark = vertex_darkColor;
    gl_Position = matrix_viewProjection * matrix_model * vec4(vertex_position, 0.0, 1.0);
}
`;

const fragmentGLSL = /* glsl */`
#include "gammaPS"
#include "tonemappingPS"

varying vec2 vUv0;
varying vec4 vLight;
varying vec4 vDark;

uniform sampler2D uTexture;

// 1 when the texture alpha is not premultiplied
uniform float uPremultiply;

void main(void) {
    // the texture is not sRGB, so it is sampled in gamma space
    vec4 texColor = texture2D(uTexture, vUv0);
    texColor.rgb *= mix(1.0, texColor.a, uPremultiply);

    // the two color tint, light and dark colors are premultiplied by alpha
    float alpha = texColor.a * vLight.a;
    vec3 color = ((texColor.a - 1.0) * vDark.a + 1.0 - texColor.rgb) * vDark.rgb + texColor.rgb * vLight.rgb;

    // tone map and gamma correct the color without premultiplied alpha
    vec3 linearColor = decodeGamma(color / max(alpha, 0.0001));
    gl_FragColor = vec4(gammaCorrectOutput(toneMap(linearColor)) * alpha, alpha);
}
`;

const vertexWGSL = /* wgsl */`
attribute vertex_position: vec2f;
attribute vertex_texCoord0: vec2f;
attribute vertex_color: vec4f;
attribute vertex_darkColor: vec4f;

uniform matrix_model: mat4x4f;
uniform matrix_viewProjection: mat4x4f;

varying vUv0: vec2f;
varying vLight: vec4f;
varying vDark: vec4f;

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    output.vUv0 = input.vertex_texCoord0;
    output.vLight = input.vertex_color;
    output.vDark = input.vertex_darkColor;
    output.position = uniform.matrix_viewProjection * uniform.matrix_model * vec4f(input.vertex_position, 0.0, 1.0);
    return output;
}
`;

const fragmentWGSL = /* wgsl */`
#include "gammaPS"
#include "tonemappingPS"

varying vUv0: vec2f;
varying vLight: vec4f;
varying vDark: vec4f;

var uTexture: texture_2d<f32>;
var uTextureSampler: sampler;

// 1 when the texture alpha is not premultiplied
uniform uPremultiply: f32;

@fragment
fn fragmentMain(input: FragmentInput) -> FragmentOutput {
    var output: FragmentOutput;
    // the texture is not sRGB, so it is sampled in gamma space
    var texColor = textureSample(uTexture, uTextureSampler, input.vUv0);
    texColor = vec4f(texColor.rgb * mix(1.0, texColor.a, uniform.uPremultiply), texColor.a);

    // the two color tint, light and dark colors are premultiplied by alpha
    let alpha = texColor.a * input.vLight.a;
    let color = ((texColor.a - 1.0) * input.vDark.a + 1.0 - texColor.rgb) * input.vDark.rgb + texColor.rgb * input.vLight.rgb;

    // tone map and gamma correct the color without premultiplied alpha
    let linearColor = decodeGamma3(color / max(alpha, 0.0001));
    output.color = vec4f(gammaCorrectOutput(toneMap(linearColor)) * alpha, alpha);
    return output;
}
`;

export { vertexGLSL, fragmentGLSL, vertexWGSL, fragmentWGSL };
