import { Scene, Texture } from "three";
import { SceneProperties } from "visual/components/interactive/scene/types";

export const setSceneProperties = (
  sceneProperties: SceneProperties | undefined,
  scene: Scene
) => {
  if (!sceneProperties) return;
  if (sceneProperties.background !== null) {
    scene.background = sceneProperties.background as Texture;
  }
};
