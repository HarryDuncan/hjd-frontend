import { MutableRefObject, useEffect } from "react";
import { useThreeJs } from "hooks/use-three-js/useThreeJs";
import { useThread, useThreadWithPostProcessor } from "hooks/use-thread";
import { AnimationWidgetScene, FunctionBasedScene } from "./types";
import { useAnimationWidgetRefs } from "./useAnimationWidgetRefs";
import { useScenes } from "./scenes/useScenes";
import { useSetActiveScene } from "./scenes/useSetActiveScene";
import { useUpdateScene } from "./scenes/useUpdateScene";
import { useChangeScenes } from "./scenes/useChangeScenes";
import { WebGLRenderer } from "three";

export const useRunAnimations = (sceneParams: AnimationWidgetScene[]) => {
  // Refs
  const { sceneIndex, isRunningRef } = useAnimationWidgetRefs();

  const { container, postProcessor, renderer, currentFrameRef, clock } =
    useThreeJs();

  const { initializedScenes, areScenesInitialized } = useScenes(sceneParams);
  const setActiveScene = useSetActiveScene(
    initializedScenes,
    renderer,
    postProcessor,
    isRunningRef
  );

  const { update, pause } = useThreadWithWidget(
    initializedScenes,
    areScenesInitialized,
    sceneIndex,
    renderer,
    currentFrameRef
  );

  useEffect(() => {
    if (areScenesInitialized) {
      setActiveScene(0);
      update();
    }
  }, [areScenesInitialized, setActiveScene, update]);

  useUpdateScene(initializedScenes, areScenesInitialized, sceneIndex);
  useChangeScenes(
    initializedScenes,
    areScenesInitialized,
    sceneIndex,
    postProcessor
  );
  return { container, currentFrameRef, pause };
};

function useThreadWithWidget(
  initializedScenes: FunctionBasedScene[],
  areScenesInitialized: boolean,
  sceneIndex: MutableRefObject<number>,
  renderer: WebGLRenderer,
  currentFrameRef: React.MutableRefObject<number>
) {
  const { scene, camera } = initializedScenes[sceneIndex.current] ?? {
    scene: null,
    camera: null,
  };
  const { update, pause } = useThread(renderer, currentFrameRef, scene, camera);
  return { update, pause };
}
