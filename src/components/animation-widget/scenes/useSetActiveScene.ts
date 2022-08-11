import PostProcessor from "components/post-processor/PostProcessor";
import React, { useCallback } from "react";

export const useSetActiveScene = (
  initializedScenes: any[],
  renderer: any,
  postProcessor: React.MutableRefObject<PostProcessor | null>,
  isRunningRef: React.MutableRefObject<boolean>
) =>
  useCallback(
    (sceneIndex: number) => {
      const currentScene = initializedScenes[sceneIndex];
      postProcessor.current = new PostProcessor({
        renderer,
        scene: currentScene.scene,
        camera: currentScene.camera,
      });
      isRunningRef.current = true;
    },
    [initializedScenes, renderer, isRunningRef, postProcessor]
  );
