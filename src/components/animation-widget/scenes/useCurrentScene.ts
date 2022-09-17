import { useMemo } from "react";

export const useCurrentScene = (
  initializedScenes: any,
  areScenesInitialized: any,
  sceneIndex: any
) =>
  useMemo(() => {
    if (!areScenesInitialized) return { camera: null, scene: null };
    const { camera, scene } = initializedScenes[sceneIndex.current];
    return { camera, scene };
  }, [initializedScenes, areScenesInitialized, sceneIndex]);
