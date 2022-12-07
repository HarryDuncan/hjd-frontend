import * as THREE from "three";
import { COLOR_PAIRS } from "./consts";
import { Asset } from "models/visuals/types";
import { Camera, PerspectiveCamera, Scene } from "three";
import { FunctionBasedScene } from "components/animation-widget/types";
import { capitalToCamelCase, getKeyCount } from "visuals/helpers/utils";
import { loadGLTF } from "visuals/loaders/loadGLTF";

interface SpinningBlocksData {
  name: string;
  data: { assets: Asset[] };
}
interface SceneParams {
  materialIndex: number;
  scene: Scene;
  camera: Camera;
  reinitialise: boolean;
  shouldChangeColors: boolean;
  time: number;
}
const getMaterials = (index: number) => {
  const selectedColorIndex = index <= COLOR_PAIRS.length - 1 ? index : 0;

  const material1 = new THREE.MeshPhongMaterial({
    color: COLOR_PAIRS[selectedColorIndex][0],
    reflectivity: 0,
  });
  const material2 = new THREE.MeshPhongMaterial({
    color: COLOR_PAIRS[selectedColorIndex][1],
    reflectivity: 0,
  });

  return { material1, material2 };
};

const setUpLights = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  ambientLight.position.x = 900;
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.y = 150;
  pointLight.castShadow = true;
  return { ambientLight, pointLight };
};

const init = async (sceneProps: SpinningBlocksData) => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight > 1
      ? window.innerWidth / window.innerHeight
      : 1.0,
    1,
    10000
  );
  camera.position.set(0, 50, 200);
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  let url = sceneProps.data.assets[0].url;
  const object = await loadGLTF(url);
  const scale = 2;
  object.scale.set(scale, scale, scale);
  object.castShadow = true;
  const { material1, material2 } = getMaterials(0);
  let count = 0;

  object.traverse((o) => {
    //@ts-ignore
    if (o.isMesh) {
      //@ts-ignore
      o.material = count % 2 === 0 ? material1 : material2;
    }
    count++;
  });
  scene.add(object);
  scene.name = "spinning blocks";

  // SCENE PARAMS
  const sceneParams: any = {};
  const { pointLight, ambientLight } = setUpLights();
  addLightsToScene(scene, [pointLight, ambientLight]);
  addLightsToSceneParams(sceneParams, [pointLight, ambientLight]);

  sceneParams.shouldChangeColors = false;
  sceneParams.time = 0;
  sceneParams.materialIndex = 0;
  (sceneParams.camera = camera), (sceneParams.scene = scene);
  return { camera, scene, sceneParams };
};

// FUNCTIONS FOR UPDATE
const moveCameraX = (scrub: number, speed: number) => Math.sin(scrub) * speed;

const moveCameraZ = (scrub: number, speed: number) => Math.cos(scrub) * speed;

const shouldChangeScene = (positionZ: number, readyToChange: boolean) =>
  positionZ > -0.5 && positionZ < 0.5 && readyToChange;

const updateMaterialIndex = (sceneParams: SceneParams) =>
  sceneParams.materialIndex >= COLOR_PAIRS.length - 1
    ? 0
    : sceneParams.materialIndex + 1;
const onUpdate = (sceneParams: SceneParams) => {
  if (sceneParams.reinitialise) {
    sceneParams.shouldChangeColors = true;
    sceneParams.reinitialise = false;
  }

  const delta = 1;
  sceneParams.time += delta * 0.005;
  sceneParams.camera.position.set(
    moveCameraZ(sceneParams.time, 15),
    sceneParams.camera.position.y,
    moveCameraX(sceneParams.time, 0.9)
  );

  sceneParams.camera.lookAt(sceneParams.scene.position);
  if (
    shouldChangeScene(
      sceneParams.camera.position.z,
      sceneParams.shouldChangeColors
    )
  ) {
    sceneParams.shouldChangeColors = false;
    sceneParams.materialIndex = updateMaterialIndex(sceneParams);
    const { material1, material2 } = getMaterials(sceneParams.materialIndex);
    let count = 0;
    sceneParams.scene.traverse((o) => {
      // @ts-ignore
      if (o.isMesh) {
        // @ts-ignore
        o.material = count % 2 === 0 ? material1 : material2;
        count++;
      }
    });
  }
};

export const SpinningBlocks: FunctionBasedScene = {
  name: " SpinningBlocks",
  scene: null,
  camera: null,
  sceneParams: {},
  sceneLength: 9000,
  init: init,
  onUpdate: onUpdate,
};

export const addLightsToScene = (scene: any, lightArray: any) => {
  lightArray.forEach((light: any) => {
    scene.add(light);
  });
};

export const addLightsToSceneParams = (sceneParams: any, lightArray: any) => {
  lightArray.forEach((light: any) => {
    const keyName = capitalToCamelCase(light.type);
    const count = getKeyCount(capitalToCamelCase(light.type), sceneParams);
    sceneParams[`${keyName}${count}`] = light;
  });
};
