import { MutableRefObject, useEffect, useState } from "react";
import { WebGLRenderer } from "three";
import { AnimationWidgetScene, FunctionBasedScene } from "../types";
import { useInitializeScenes } from "./useInitializeScenes";

export const useScenes = (
  scenes: AnimationWidgetScene[],
  containerRef: MutableRefObject<null | HTMLDivElement>,
  renderer: WebGLRenderer
) => {
  const [areScenesInitialized, setAreScenesInitialized] = useState(false);
  const [initializedScenes, setInitializedScenes] = useState<
    FunctionBasedScene[]
  >([]);
  const initializeScenes = useInitializeScenes(scenes, containerRef, renderer);
  useEffect(() => {
    async function getAssets() {
      const loadedScenes = await initializeScenes();
      setAreScenesInitialized(true);
      setInitializedScenes(loadedScenes);
    }
    getAssets();
  }, [scenes, initializeScenes]);

  return { initializedScenes, areScenesInitialized };
};
