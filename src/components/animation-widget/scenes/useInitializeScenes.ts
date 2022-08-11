import * as Scenes from "visuals/function-based-scenes";
import { cloneDeep } from "lodash";
import { useCallback } from "react";
import { AnimationWidgetScene, FunctionBasedScene } from "../types";

export const useInitializeScenes = (scenes: AnimationWidgetScene[]) => {
  async function initializeScene(unInitializedScene: AnimationWidgetScene) {
    const { name } = unInitializedScene;
    const initializedScene: FunctionBasedScene = cloneDeep(Scenes[name]);
    const { scene, camera, sceneParams } = await initializedScene.init(
      unInitializedScene
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