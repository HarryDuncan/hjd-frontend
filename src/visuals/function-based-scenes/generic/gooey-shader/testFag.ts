export const t = {
  frag: `

uniform float uTime;

void main()
{
    float t = mod(uTime, 1.0);
    gl_FragColor  = mix(vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), t);
}`,
};
