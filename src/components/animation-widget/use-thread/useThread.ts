import { FunctionBasedScene } from "components/animation-widget/types";
import { MutableRefObject, useCallback, useEffect } from "react";
import { WebGLRenderer } from "three";

export const useThread = (
  renderer: WebGLRenderer | undefined,
  currentFrameRef: MutableRefObject<number>,
  initializedScenes: FunctionBasedScene[],
  sceneIndex: number
) => {
  const update = useCallback(() => {
    const { scene, camera, onUpdate, sceneParams } = initializedScenes[
      sceneIndex
    ] ?? {
      scene: null,
      camera: null,
      onUpdate: null,
      sceneParams: null,
    };
    if (!renderer || !scene || !camera || !onUpdate || !sceneParams) {
      console.warn("renderer not defined");
      return;
    }
    onUpdate(sceneParams);
    renderer.render(scene, camera);
    currentFrameRef.current = requestAnimationFrame(update);
  }, [currentFrameRef, renderer, initializedScenes, sceneIndex]);

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
