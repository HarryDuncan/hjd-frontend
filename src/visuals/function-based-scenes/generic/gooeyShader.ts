import { FunctionBasedScene } from "components/animation-widget/types";
import { Asset } from "models/visuals/types";
import { Color, PerspectiveCamera, Scene } from "three";

interface GooeyShaderData {
  name: string;
  data: { assets: Asset[] };
}

export const initializeScene = async (props: GooeyShaderData) => {
  // Camera
  const camera = new PerspectiveCamera(50, 1, 0.01, 2000);
  camera.position.set(-500, 500, 1500);
  camera.position.set(0, 0, 1500);
  camera.name = "gooey-shader";

  // SCENE

  const sceneParams = { scene: new Scene() };

  sceneParams.scene.background = new Color(0xffffff);

  // Set up lights and add to scene and sceneparams
  sceneParams.scene.name = "gooey";
  return { camera, scene: sceneParams.scene, sceneParams };
};

const onUpdate = (sceneParams: any) => {};

export const GooeyShader: FunctionBasedScene = {
  name: "Gooey",
  scene: null,
  camera: null,
  sceneParams: {},
  sceneLength: 15000,
  init: initializeScene,
  onUpdate,
};
