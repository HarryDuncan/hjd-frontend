import React, { useCallback, useEffect } from "react";
import { FunctionBasedScene } from "../types";

export const useUpdateScene = (
  initializedScenes: FunctionBasedScene[],
  areScenesInitialized: boolean,
  sceneIndex: number
) => {
  const updateScene = useCallback(() => {
    const currentIndex = sceneIndex;
    const currentScene: FunctionBasedScene = initializedScenes[currentIndex];
    if (currentScene) {
      currentScene.onUpdate(currentScene.sceneParams);
    }
  }, [initializedScenes, sceneIndex]);

  useEffect(() => {
    document.addEventListener("scene:update", () => updateScene());
  }, [areScenesInitialized, sceneIndex, updateScene]);
};
