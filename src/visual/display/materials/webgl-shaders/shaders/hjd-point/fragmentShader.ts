export const fragmentShader = `

uniform sampler2D uTextureOne;
uniform sampler2D uTextureZero;
uniform float uOpacity;

void main() {

    vec4 pointColor =  vec4(1.0, 0.0, 0.0,  1.0);        
    gl_FragColor =  pointColor * texture2D(uTextureOne, gl_PointCoord);

}`;
