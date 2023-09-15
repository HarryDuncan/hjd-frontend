import { ShaderMeshObject } from "visual/set-up/config/mesh/mesh.types";
import { getLoopType } from "./getLoopTypes";
import { updateObjectUniformByKey } from "../uniforms/updateObjectUniformByKey";
import { AnimationLoopConfigItem } from "./animationloop.types";
import { composeFunctions } from "visual/utils/composeFunctions";

const defaultConfig = [
  {
    uniform: "uTime",
    loopType: "LINEAR",
  },
];
export const setUpAnimationLoop = (
  config: AnimationLoopConfigItem[],
  loopDuration?: number
): ((
  shaderMesh: ShaderMeshObject,
  time: number
) => [shaderMesh: ShaderMeshObject, time: number]) => {
  const animationConfig = [
    ...defaultConfig,
    ...config,
  ] as AnimationLoopConfigItem[];
  const animationLoopFunctions = animationConfig.map(
    ({ uniform, loopType, duration, steepness, toMaterial, loopLimit }) => {
      const animationLoopDuration = duration ?? loopDuration;
      const loopFunction = getLoopType(
        loopType,
        animationLoopDuration,
        steepness,
        loopLimit
      );
      return (shaderMesh: ShaderMeshObject, time: number) => {
        const uniformValue = loopFunction(time);
        if (toMaterial && shaderMesh?.material.name !== toMaterial) {
          return [shaderMesh, time];
        }
        updateObjectUniformByKey(shaderMesh, uniform, uniformValue);
        return [shaderMesh, time];
      };
    }
  );
  return composeFunctions(animationLoopFunctions);
};