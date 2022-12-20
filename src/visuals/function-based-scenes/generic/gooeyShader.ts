import { FunctionBasedScene } from "components/animation-widget/types";
import { Asset } from "models/visuals/types";
import {
  Color,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
} from "three";
import { loadTexture } from "visuals/helpers/Textures";
import { getTextureRatio } from "visuals/helpers/textures/getTextureRatio";
import { clamp } from "visuals/helpers/utils/clamp";
import { getMeshByName } from "visuals/helpers/utils/getMeshByName";
import { shapeFrag } from "./gooey-shader/gooeyFrag";
import { defaultVertex } from "./gooey-shader/vertex";

interface GooeyShaderData {
  name: string;
  data: Asset[];
}

export const initializeScene = async ({ name, data }: GooeyShaderData) => {
  // Camera
  const camera = new PerspectiveCamera(50, 1, 0.01, 2000);

  camera.position.set(0, 0, 2);
  camera.name = name;

  const textures = await Promise.all(
    data.map(async (asset) => loadTexture(asset.url))
  );

  const uCoverImage = { type: "t", value: textures[0] };
  const uRevealedImage = { type: "t", value: textures[2] };
  const uCoverImageRatio = { value: getTextureRatio(textures[1]) };
  const uRevealedImageRatio = { value: getTextureRatio(textures[2]) };
  const uShape = { type: "t", value: textures[2] };
  const point = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.4,
  };
  const updatedUniforms = {
    ...uniforms,
    uRevealedImageRatio,
    uCoverImage,
    uRevealedImage,
    uCoverImageRatio,
    uShape,
    uPosition: { value: point },
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
  const newShaderMesh = getMeshByName(sceneParams.scene, "shader-mesh");
  if (!newShaderMesh) return;
  // @ts-ignore
  const shaderUniforms = newShaderMesh.material.uniforms;
  shaderUniforms.uTime.value += 0.05;

  shaderUniforms.uProgressHover.value = clamp(
    Math.abs(Math.sin(shaderUniforms.uTime.value * 0.01)),
    0.2,
    0.8
  );
  // @ts-ignore
  newShaderMesh.material.uniformsNeedUpdate = true;
  // @ts-ignore
  newShaderMesh.material.uniforms = shaderUniforms;
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
    // @ts-ignore

    extensions: {
      derivatives: true,
    },
    defines: {
      PI: Math.PI,
      PR: window.devicePixelRatio.toFixed(1),
    },
  });
  material.uniformsNeedUpdate = true;
  const shaderMesh = new Mesh(geometry, material);
  shaderMesh.name = "shader-mesh";
  return shaderMesh;
};

const uniforms = {
  uAlpha: { value: 1.0 },
  uCoverImage: { type: "t", value: null },
  uCoverImageRatio: { value: 0 },
  uRevealedImage: { type: "t", value: null },
  uRevealedImageRatio: { value: 0 },
  uProgressHover: { value: 0.3 },
  uProgressClick: { value: 0.0 },
  uTime: { value: 0 },
  uSpace: { value: 10.0 },
  uPosition: { value: new Vector2(400, 400) },
};
