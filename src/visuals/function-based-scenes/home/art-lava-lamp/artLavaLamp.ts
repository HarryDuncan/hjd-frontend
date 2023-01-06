import { FunctionBasedScene } from "components/animation-widget/types";
import { Asset } from "models/visuals/types";
import {
  AmbientLight,
  Color,
  DirectionalLight,
  PerspectiveCamera,
  PointLight,
  Scene,
  ShaderMaterial,
} from "three";
import { MarchingCubes } from "three/examples/jsm/objects/MarchingCubes.js";
import { initializeAdvancedMaterial } from "visuals/helpers/materials/initializeAdvancedMaterial";

import { setUpRefractionEnvMap } from "visuals/helpers/Textures";

interface ArtLavaLampData {
  name: string;
  data: { assets: Asset[] };
}
const SCENE_PARAMS = {
  paths: [] as string[],
  numBlobs: 5,
  floor: false,
  wallX: false,
  wallZ: false,
  time: 0,
  speed: 0.5,
  index: 0,
  hue: 0.45,
  saturation: 0.1,
  lightness: 0.5,
  lhue: 0.04,
  lsaturation: 1.0,
  llightness: 0.5,
  lx: 0.5,
  ly: 0.5,
  lz: 1.0,

  sceneControl: {
    reinitialize: false,
  },
};

interface ArtLavaLampSceneParams {
  paths: string[];
  numBlobs: number;
  floor: boolean;
  wallX: boolean;
  wallZ: boolean;
  time: number;
  speed: number;
  index: number;
  hue: number;
  saturation: number;
  lightness: number;
  lhue: number;
  lsaturation: number;
  llightness: number;
  lx: number;
  ly: number;
  lz: number;
  scene: Scene;
  light?: DirectionalLight;
  pointLight?: PointLight;
  effect?: MarchingCubes;
  sceneControl: {
    reinitialize: boolean;
  };
}

const initializeScene = async (sceneData: ArtLavaLampData) => {
  // Camera
  const camera = new PerspectiveCamera(50, 1, 0.01, 2000);
  camera.position.set(0, 0, 1500);
  camera.name = "art-lava";

  // SCENE
  const {
    data: { assets },
  } = sceneData;
  const pathUrls = assets.map(({ url }) => url);

  const refractionMap = setUpRefractionEnvMap(pathUrls[0], "jpg");
  const materialParams = { envMap: refractionMap };

  const advancedMaterial = initializeAdvancedMaterial("SHINY", materialParams);
  const sceneParams = { ...SCENE_PARAMS, scene: new Scene() };
  sceneParams.paths = pathUrls;
  sceneParams.scene.background = new Color(0xffffff);
  addMarchingCubes(advancedMaterial, sceneParams);

  // Set up lights and add to scene and sceneparams
  setUpLights(sceneParams);
  sceneParams.scene.name = "artLavaLamp";
  return { camera, scene: sceneParams.scene, sceneParams };
};

const setUpLights = (sceneParams: ArtLavaLampSceneParams) => {
  const directionalLight = new DirectionalLight(0xffffff);
  directionalLight.position.set(0.5, 0.5, 1);
  sceneParams.scene.add(directionalLight);

  const pointLight = new PointLight(0xff3300);
  pointLight.position.set(0, 0, 100);
  sceneParams.scene.add(pointLight);

  const ambientLight = new AmbientLight(0xffffff, 0.2);
  ambientLight.position.set(0, 0, 100);
  sceneParams.scene.add(ambientLight);

  sceneParams.light = directionalLight;
  sceneParams.pointLight = pointLight;
};
// this controls content of marching cubes voxel field
const updateCubes = (object: any, time: any, numblobs: number) => {
  object.reset();
  const subtract = 12;
  const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1);

  for (let i = 0; i < numblobs; i += 1) {
    const ballPosX =
      Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 +
      0.5;
    const ballPosY = Math.tan(i * 1.77 + time) * 0.27 + 0.5;
    const ballPosZ =
      Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 0.5;
    object.addBall(ballPosX, ballPosY, ballPosZ, strength, subtract);
  }
  object.update();
  return object;
};

const addMarchingCubes = (
  advancedMaterial: any,
  sceneParams: ArtLavaLampSceneParams
) => {
  const resolution = 105;
  const { material } = advancedMaterial;
  const effect = new MarchingCubes(resolution, material, true, true, 100000);
  effect.position.set(0, 0, 0);
  effect.scale.set(700, 700, 700);

  effect.enableUvs = false;
  effect.enableColors = false;
  sceneParams.effect = effect;
  sceneParams.scene.add(effect);
};

const changeMaterial = (sceneParams: ArtLavaLampSceneParams) => {
  const urlPath = sceneParams.paths[sceneParams.index];
  const refractionMap = setUpRefractionEnvMap(urlPath, "jpg");

  // Set up bubble material
  const materialParams = { envMap: refractionMap };
  const advancedMaterial = initializeAdvancedMaterial("SHINY", materialParams);

  return advancedMaterial.material;
};

const updateIndex = (sceneParams: ArtLavaLampSceneParams) =>
  sceneParams.index >= sceneParams.paths.length - 1 ? 0 : sceneParams.index + 1;

const onUpdate = (sceneParams: ArtLavaLampSceneParams) => {
  if (
    !sceneParams.effect ||
    !sceneParams.light ||
    !sceneParams.pointLight ||
    !sceneParams.scene
  )
    return;
  if (sceneParams.sceneControl.reinitialize) {
    sceneParams.sceneControl.reinitialize = false;

    sceneParams.index = updateIndex(sceneParams);
    sceneParams.effect.material = changeMaterial(sceneParams);
  }

  const delta = 0.1;

  sceneParams.time += delta * sceneParams.speed * 0.3;
  if (sceneParams.effect.material instanceof ShaderMaterial) {
    sceneParams.effect.material.uniforms.uBaseColor.value.setHSL(
      sceneParams.hue,
      sceneParams.saturation,
      sceneParams.lightness
    );
  } else {
    // @ts-ignore
    sceneParams.effect.material.color.setHSL(
      sceneParams.hue,
      sceneParams.saturation,
      sceneParams.lightness
    );
  }

  sceneParams.light.position.set(
    sceneParams.lx + Math.cos(sceneParams.time),
    sceneParams.ly,
    sceneParams.lz
  );
  sceneParams.light.position.normalize();

  sceneParams.pointLight.color.setHSL(
    sceneParams.lhue,
    sceneParams.lsaturation - Math.cos(sceneParams.time),
    sceneParams.llightness
  );

  updateCubes(sceneParams.effect, sceneParams.time, sceneParams.numBlobs);
};

const onClose = (sceneParams: ArtLavaLampSceneParams) => {
  console.warn(sceneParams);
};

export const ArtLavaLamp: FunctionBasedScene = {
  name: "ArtLavaLamp",
  scene: null,
  camera: null,
  sceneParams: {},
  sceneLength: 15000,
  init: initializeScene,
  onUpdate,
  onClose,
};
