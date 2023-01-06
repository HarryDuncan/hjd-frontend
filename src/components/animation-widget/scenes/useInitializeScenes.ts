import * as Scenes from "visuals/function-based-scenes";
import { cloneDeep } from "lodash";
import { MutableRefObject, useCallback } from "react";
import { AnimationWidgetScene, FunctionBasedScene } from "../types";
import { WebGLRenderer } from "three";

export const useInitializeScenes = (
  scenes: AnimationWidgetScene[],
  containerRef: MutableRefObject<null | HTMLDivElement>,
  renderer: WebGLRenderer
) => {
  async function initializeScene(unInitializedScene: AnimationWidgetScene) {
    const { name } = unInitializedScene;
    const initializedScene: FunctionBasedScene = cloneDeep(Scenes[name]);
    const { scene, camera, sceneParams } = await initializedScene.init(
      unInitializedScene,
      containerRef,
      renderer
    );
    initializedScene.camera = camera;
    initializedScene.scene = scene;
    initializedScene.sceneParams = sceneParams;
    initializedScene.name = name;
    return initializedScene;
  }

  return useCallback(async () => {
    const loadedScenes = await Promise.all(
      scenes.map(async (scene) => initializeScene(scene))
    );
    return loadedScenes;
  }, [scenes]);
};
