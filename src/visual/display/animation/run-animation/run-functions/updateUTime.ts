import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { shaderAnimationLoop } from "../../animation-functions/animation-loop/shaderAnimationLoop";

export const updateUTime = (
  scene: InteractiveScene,
  animationProperties,
  animatedObjects
) => {
  let startTime: number;
  let uTime: number = 0;
  const { animationDurationMilis } = animationProperties;
  const duration = animationDurationMilis / 1000;
  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    uTime += scene.clock.getDelta();

    animatedObjects.forEach((object) => {
      object.material.uniforms.uTime.value = uTime;
      shaderAnimationLoop(uTime, duration, object);
    });
    if (progress <= animationDurationMilis || animationDurationMilis === -1) {
      requestAnimationFrame(step);
    } else {
      startTime = 0;
      if (animationProperties.repeatAnimation) {
        setTimeout(() => {
          scene.clock.getDelta();
          requestAnimationFrame(step);
        }, animationProperties.animationPauseMilis);
      }
    }
  }
  requestAnimationFrame(step);
};
