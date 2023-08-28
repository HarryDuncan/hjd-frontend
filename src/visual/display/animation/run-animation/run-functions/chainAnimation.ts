import { stepAndWrap } from "visual/display/utils/stepAndWrap";
import { MeshObject } from "visual/set-up/config/mesh/mesh.types";
import { Object3D } from "three";
import { AnimationConfig } from "../../animation.types";
import { performAnimation } from "../performAnimation";

export const chainAnimation = (
  animationConfig: AnimationConfig,
  animatedObjects: MeshObject[] | Object3D[]
) => {
  const { animationProperties, animationType } = animationConfig;
  let startTime: number;
  let currentItemIndex = 0;
  function step(timestamp: number) {
    const object = animatedObjects[currentItemIndex];
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    performAnimation(animationType, object, progress, animationProperties);
    if (
      progress < animationProperties.animationDurationMilis ||
      animationProperties.animationDurationMilis === -1
    ) {
      requestAnimationFrame(step);
    } else {
      startTime = 0;
      currentItemIndex = stepAndWrap(
        0,
        animatedObjects.length - 1,
        currentItemIndex
      );
      if (animationProperties.repeatAnimation) {
        setTimeout(() => {
          step(timestamp + animationProperties.animationPauseMilis);
        }, animationProperties.animationPauseMilis);
      }
    }
  }

  requestAnimationFrame(step);
};