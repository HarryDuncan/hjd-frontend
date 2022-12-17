import { addShaderFunction } from "visuals/helpers/shaders/addShaderFunction";
import { noise3D } from "visuals/helpers/shaders/noise/simplex/noise3D";

export const shapeFrag = {
  frag: `
    uniform sampler2D uCoverImage;
    uniform sampler2D uRevealedImage;
    uniform sampler2D uShape;
    
    uniform float uTime;
    uniform float uAlpha;
    uniform int uOverlayIndex;
    uniform vec2 uResolution;
    uniform vec2 uCoverImageRatio;
    uniform vec2 uRevealedImageRatio;
    uniform vec2 uPosition;
    uniform float uProgressHover;
    uniform float uProgressClick;
    uniform float uSpace;
    varying vec2 vUv;
    
    ${addShaderFunction([noise3D])}
 
    void main() {
      vec2 resolution = uResolution * PR;
      vec2 uv = vUv;
      vec2 uv_h = vUv;
      float time = uTime * 0.05;
      float progress = uProgressClick;
      float progressHover = uProgressHover;
    
      vec2 st = gl_FragCoord.xy / resolution.xy - vec2(.5);
      st.y *= resolution.y / resolution.x;
    
      vec2 mouse = vec2((uPosition.x / uResolution.x) * 2. - 1.,-(uPosition.y / uResolution.y) * 2. + 1.) * -.5;
      mouse.y *= resolution.y / resolution.x;
    
      uv -= vec2(0.5);
      uv *= 1. - uProgressHover * 0.03;
      uv *= uCoverImageRatio;
      uv += vec2(0.5);
    
      vec2 shapeUv = (st + mouse) * 4.;
      shapeUv *= 1.5 - (progressHover + progress) * 0.8;
      shapeUv /= progressHover;
      shapeUv += vec2(.5);
    
      vec4 shape = texture2D(uShape, shapeUv);
    
      float s = (shape.r) * 2. * (1. - progress);
      float offX = uv.x + (time * 0.03) ;
      float offY = uv.y * 3.5 + time * .8 + cos(time * 1.83) + 4.;
      float n = noise3D(vec3(offX, offY, time * 0.3) * 4.) + (2.4 + uSpace);
    
      uv_h -= vec2(0.5);
      uv_h *= 1. - progressHover * 0.05;
      uv_h *= uRevealedImageRatio;
      uv_h += vec2(0.5);
      int index = 1;
      vec2 coords = uv + mouse * 0.05 * progressHover * (1. - progress);
      vec4 image = texture2D(uRevealedImage, coords);
      vec4 hover = texture2D( uCoverImage, uv_h + mouse * 0.5 * progressHover * (1. - progress));
    
      float pct = smoothstep(.99, 1., clamp(n - s, 0., 5.) + progress);
    
      vec4 finalImage = mix(image, hover, pct);
    
      gl_FragColor = vec4(finalImage.rgb, uAlpha) ;
     
    }
    `,
};
