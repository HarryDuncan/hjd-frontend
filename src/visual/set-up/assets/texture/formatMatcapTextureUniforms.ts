import { Texture } from "three";

export const formatMatcapTextureUniforms = (
  uniforms: any,
  matcapData: Texture
) => ({
  ...uniforms,
  matcap: { value: matcapData },
});
