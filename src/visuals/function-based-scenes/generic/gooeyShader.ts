import { FunctionBasedScene } from "components/animation-widget/types";
import { Asset } from "models/visuals/types";
import {
  Color,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
} from "three";
import { loadTexture } from "visuals/helpers/Textures";
import { getTextureRatio } from "visuals/helpers/textures/getTextureRatio";
import { shapeFrag } from "./gooey-shader/gooeyFrag";
import { defaultVertex } from "./gooey-shader/vertex";

interface GooeyShaderData {
  name: string;
  data: Asset[];
}

export const initializeScene = async ({ name, data }: GooeyShaderData) => {
  // Camera
  const camera = new PerspectiveCamera(50, 1, 0.01, 2000);

  camera.position.set(0, 0, 1);
  camera.name = name;

  const textures = await Promise.all(
    data.map(async (asset) => loadTexture(asset.url))
  );
  const uCoverImage = { value: textures[0] };
  const uRevealedImage = { value: textures[1] };
  const uCoverImageRatio = { value: getTextureRatio(textures[0]) };
  const uRevealedImageRatio = { value: getTextureRatio(textures[1]) };
  const uShape = { value: getTextureRatio(textures[2]) };
  const updatedUniforms = {
    ...uniforms,
    uRevealedImageRatio,
    uCoverImage,
    uRevealedImage,
    uCoverImageRatio,
    uShape,
    uResolution: {
      value: new Vector2(window.innerWidth, window.innerHeight),
    },
  };

  const shaderMesh = shaderAndMesh(
    defaultVertex.vert,
    shapeFrag.frag,
    updatedUniforms
  );

  // SCENE

  const sceneParams = { scene: new Scene() };

  sceneParams.scene.background = new Color(0xffffff);

  // Set up lights and add to scene and sceneparams
  sceneParams.scene.name = "gooey";
  sceneParams.scene.add(shaderMesh);
  return { camera, scene: sceneParams.scene, sceneParams };
};

const onUpdate = (sceneParams: any) => {
  console.log("ttt");
};

export const GooeyShader: FunctionBasedScene = {
  name: "Gooey",
  scene: null,
  camera: null,
  sceneParams: {},
  sceneLength: 15000,
  init: initializeScene,
  onUpdate,
};

type UniformValue = Record<"value", any>;
type Uniform = Record<string, UniformValue>;
const shaderAndMesh = (
  vertexShader: string,
  fragmentShader: string,
  uniforms: Uniform
) => {
  const geometry = new PlaneGeometry(2, 2);
  const material = new ShaderMaterial({
    // @ts-ignore
    uniforms,
    vertexShader,
    fragmentShader,
    depthWrite: false,
    depthTest: true,
    defines: {
      PI: Math.PI,
      PR: window.devicePixelRatio.toFixed(1),
    },
  });

  const shaderMesh = new Mesh(geometry, material);
  return shaderMesh;
};

const uniforms = {
  uAlpha: { value: 1 },
  uCoverImage: { type: "t", value: null },
  uCoverImageRatio: { value: 0 },
  uRevealedImage: { type: "t", value: null },
  uRevealedImageRatio: { value: 0 },
  uProgressHover: { value: 1.0 },
  uProgressClick: { value: 0 },
  uTime: { value: 0 },
  uSpace: { value: 0 },
  uPosition: { value: new Vector2(0, 0) },
};
