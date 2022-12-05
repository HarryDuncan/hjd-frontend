import PostProcessor from "components/post-processor/PostProcessor";
import { MutableRefObject, useCallback, useEffect } from "react";
import { moveThroughArray } from "../../../../utils/helpers/moveThroughArray";
import { FunctionBasedScene } from "../types";

export const useChangeScenes = (
  initializedScenes: FunctionBasedScene[],
  areScenesInitialized: boolean,
  sceneIndex: number,
  updateSceneIndex: any,
  postProccessor: MutableRefObject<PostProcessor | null>
) => {
  const changeScene = useCallback(
    (updatedIndex?: number) => {
      const { newIndex } = moveThroughArray<FunctionBasedScene>(
        initializedScenes,
        updatedIndex ?? sceneIndex
      );
      console.log(newIndex);
      updateSceneIndex(newIndex);
      const currentScene = initializedScenes[newIndex];
      if (currentScene.camera && currentScene.scene) {
        postProccessor.current?.updateProcessorParams({
          camera: currentScene.camera,
          scene: currentScene.scene,
        });
        setTimeout(() => {
          changeScene(newIndex);
        }, currentScene.sceneLength);
      }
    },
    [sceneIndex, postProccessor, initializedScenes]
  );

  useEffect(() => {
    if (areScenesInitialized) {
      console.log(sceneIndex);
      const currentSceneIndex = sceneIndex;
      const { sceneLength } = initializedScenes[
        currentSceneIndex
      ] as FunctionBasedScene;
      if (shouldChangeScene(sceneLength, initializedScenes.length)) {
        setTimeout(() => {
          changeScene();
        }, sceneLength);
      }
    }
  }, [areScenesInitialized, initializedScenes, changeScene, sceneIndex]);
};

const shouldChangeScene = (
  currentSceneLength: number,
  sceneArrayLength: number
) => currentSceneLength !== -1 && sceneArrayLength > 1;
