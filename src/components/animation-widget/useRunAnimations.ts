import { MutableRefObject, useEffect, useMemo, useState } from "react";
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
  const [sceneIndex, updateSceneIndex] = useState<number>(0);
  // Refs
  const { isRunningRef } = useAnimationWidgetRefs();

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
      setActiveScene(sceneIndex);
      update();
    }
  }, [areScenesInitialized, setActiveScene, update]);

  useUpdateScene(initializedScenes, areScenesInitialized, sceneIndex);
  useChangeScenes(
    initializedScenes,
    areScenesInitialized,
    sceneIndex,
    updateSceneIndex,
    postProcessor
  );
  return { container, currentFrameRef, pause };
};

function useThreadWithWidget(
  initializedScenes: FunctionBasedScene[],
  areScenesInitialized: boolean,
  sceneIndex: number,
  renderer: WebGLRenderer,
  currentFrameRef: React.MutableRefObject<number>
) {
  const { scene, camera } = useCurrentSceneAndCamera(
    initializedScenes,
    sceneIndex
  );

  const { update, pause } = useThread(
    renderer,
    currentFrameRef,
    scene,
    camera,
    sceneIndex
  );

  return { update, pause };
}

const useCurrentSceneAndCamera = (
  initializedScenes: FunctionBasedScene[],
  sceneIndex: number
) =>
  useMemo(
    () =>
      initializedScenes[sceneIndex] ?? {
        scene: null,
        camera: null,
      },
    [initializedScenes, sceneIndex]
  );
