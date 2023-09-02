import {
  AnimatedScene,
  AnimationConfig,
  AnimationFunctionType,
} from "../animation.types";
import { ANIMATION_FUNCTION_TYPES } from "../animation.constants";
import { animateAll } from "./run-functions/animateAll";
import { getSceneElementByName } from "visual/display/helpers/scene/getSceneElementByName";
import { updateUTime } from "./run-functions/updateUTime";
import { chainAnimation } from "./run-functions/chainAnimation";

export const runAnimation = (
  scene: AnimatedScene,
  animationFunctionType: AnimationFunctionType,
  targetIdentifier: string,
  initializedAnimationConfig: AnimationConfig,
  animationId: string
) => {
  const animatedObjects = getSceneElementByName(scene, targetIdentifier);
  if (!animatedObjects.length) {
    console.warn(
      `${animationId} can't run. No meshes selected with ${targetIdentifier}`
    );
    return;
  }
  switch (animationFunctionType) {
    case ANIMATION_FUNCTION_TYPES.CHAIN:
      chainAnimation(initializedAnimationConfig, animatedObjects);
      break;
    case ANIMATION_FUNCTION_TYPES.UTIME:
      updateUTime(scene, initializedAnimationConfig, animatedObjects);
      break;
    case ANIMATION_FUNCTION_TYPES.ALL:
    default:
      animateAll(initializedAnimationConfig, animatedObjects);
  }
};
