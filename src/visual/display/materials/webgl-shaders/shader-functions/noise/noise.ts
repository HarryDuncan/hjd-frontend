export const noise = `
float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

    float noise(vec2 p){
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);
        float res = mix(
            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
}
`;

export const cNoise = () => `
    float cnoise(vec2 P) {
        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod289(Pi);
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;
    
        vec4 i = permute(permute(ix) + iy);
    
        vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
        vec4 gy = abs(gx) - 0.5;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;
    
        vec2 g00 = vec2(gx.x, gy.x);
        vec2 g10 = vec2(gx.y, gy.y);
        vec2 g01 = vec2(gx.z, gy.z);
        vec2 g11 = vec2(gx.w, gy.w);
    
        vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;
    
        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));
    
        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3 * n_xy;
    }
`;
