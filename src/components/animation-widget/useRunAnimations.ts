import { MutableRefObject, useEffect, useState } from "react";
import { useThreeJs } from "hooks/use-three-js/useThreeJs";
import { useThread } from "components/animation-widget/use-thread";
import { AnimationWidgetScene } from "./types";
import { useScenes } from "./scenes/useScenes";
import { useChangeScenes } from "./scenes/useChangeScenes";

export const useRunAnimations = (sceneParams: AnimationWidgetScene[]) => {
  console.log("asdasd");
  const { container, postProcessor, renderer, currentFrameRef } = useThreeJs();
  const { initializedScenes, areScenesInitialized } = useScenes(
    sceneParams,
    container,
    renderer
  );

  const [sceneIndex, updateSceneIndex] = useState<number>(0);

  const { update, pause } = useThread(
    renderer,
    currentFrameRef,
    initializedScenes,
    sceneIndex
  );

  useEffect(() => {
    if (areScenesInitialized) {
      pause();
      update();
    }
  }, [areScenesInitialized, update, sceneIndex]);

  useChangeScenes(
    initializedScenes,
    areScenesInitialized,
    sceneIndex,
    updateSceneIndex,
    postProcessor
  );
  return { container, currentFrameRef, pause };
};
