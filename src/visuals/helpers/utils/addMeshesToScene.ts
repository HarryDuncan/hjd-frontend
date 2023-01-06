import { Scene } from "three";

export const addMeshesToScene = (scene: Scene, meshArr: any[]) => {
  meshArr.forEach((element) => {
    scene.add(element);
  });
};
