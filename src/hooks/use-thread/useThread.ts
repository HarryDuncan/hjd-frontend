import { ev } from "hooks/use-events/useEvents";
import { MutableRefObject, useCallback, useEffect } from "react";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";

export const useThread = (
  renderer: WebGLRenderer | CSS3DRenderer | undefined,
  currentFrameRef: MutableRefObject<number>,
  scene: Scene | null,
  camera: PerspectiveCamera | null
) => {
  const update = useCallback(() => {
    if (!renderer || !scene || !camera) {
      console.warn("renderer not defined");
      return;
    }
    ev("scene:update");
    console.log(scene);
    renderer.render(scene, camera);
    currentFrameRef.current = requestAnimationFrame(update);
  }, [currentFrameRef, renderer, scene, camera]);

  const pause = useCallback(() => {
    cancelAnimationFrame(currentFrameRef.current);
  }, [currentFrameRef]);

  useEffect(
    () => () => {
      pause();
    },
    [pause]
  );
  return { update, pause };
};
