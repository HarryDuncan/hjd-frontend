import { Vector2 } from "three";

export const defaultUniforms = (uniformConfig: any) => {
  uniformConfig.uResolution = {
    value: new Vector2(window.innerWidth, window.innerHeight).multiplyScalar(
      window.devicePixelRatio
    ),
  };
  return uniformConfig;
};
