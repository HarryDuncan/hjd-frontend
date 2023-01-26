import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { TexturePass } from "three/examples/jsm//postprocessing/TexturePass.js";
import { ClearPass } from "three/examples/jsm/postprocessing/ClearPass.js";
import {
  MaskPass,
  ClearMaskPass,
} from "three/examples/jsm//postprocessing/MaskPass.js";
import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { Camera, Group, Object3D, Texture, WebGLRenderer } from "three";
import { loadGLTF } from "visuals/loaders/loadGLTF";
import { FunctionBasedScene } from "components/animation-widget/types";
import {
  AssetItem,
  getAssetDataByName,
} from "visuals/helpers/utils/getAssetDataByName";
import { initializeMaterial } from "visuals/helpers/materials/initializeMaterial";
import { THREE_MESH_MATERIAL_TYPES } from "visuals/helpers/materials/material.constants";
import { loadTextures } from "visuals/loaders/loadTextures";
import { Asset } from "models/visuals/types";

import { MutableRefObject } from "react";
import { fitTextureToPlane } from "visuals/helpers/textures/fitTextureToPlane";
import { addMeshesToScene } from "visuals/helpers/utils/addMeshesToScene";

interface PTRSceneData {
  name: string;
  data: AssetItem[];
}

interface SceneParams {
  scene1: any;
  scene2: any;
  meshArrays: any;
  sceneProps: any;
  textures?: any;
}

const init = async (
  sceneProps: PTRSceneData,
  container: MutableRefObject<null | HTMLDivElement>,
  renderer: WebGLRenderer
) => {
  const camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
  camera.position.set(0, 0, 30);

  const mainScene = new THREE.Scene();
  const scene1 = new THREE.Scene();
  const scene2 = new THREE.Scene();
  const mainMesh = getAssetDataByName(sceneProps.data, "MainMesh");
  if (!mainMesh) return;
  const mainMeshModel = await loadGLTF(mainMesh.path);
  const meshArrays = formatMainMesh(mainMeshModel);
  const loadedTextures = await formatTextures(sceneProps.data, container);
  console.log(renderer);
  return {
    camera,
    scene: mainScene,
    sceneParams: {
      meshArrays,
      loadedTextures,
      scene1,
      scene2,
      camera,
      renderer,
      div: container.current,
    },
  };
};

const formatMainMesh = (mesh: Group) => {
  const scale = 2;
  mesh.scale.set(scale, scale, scale);
  mesh.castShadow = true;

  let count = 0;
  const scene1Meshes: Object3D[] = [];
  const scene2Meshes: Object3D[] = [];

  const material = initializeMaterial(THREE_MESH_MATERIAL_TYPES.PHONG, {});
  mesh.traverse((o) => {
    //@ts-ignore
    if (o.isMesh) {
      //@ts-ignore
      o.material = material;
      if (count % 2 === 0) {
        scene1Meshes.push(o);
      } else {
        scene2Meshes.push(o);
      }
    }
    count++;
  });
  const meshArrays = {
    scene1: scene1Meshes,
    scene2: scene2Meshes,
  };
  return meshArrays;
};

const formatTextures = async (
  data: AssetItem[],
  container: MutableRefObject<null | HTMLDivElement>
) => {
  const texture1 = getAssetDataByName(data, "texture1");
  const texture2 = getAssetDataByName(data, "texture2");
  const containerDimensions = container.current?.getBoundingClientRect();
  if (!containerDimensions) return;
  const { width, height } = containerDimensions;
  return loadTextures([texture1, texture2] as AssetItem[]).then(
    (response: Record<string, Texture>) => {
      const textures = {
        texture: fitTextureToPlane(response.texture1, width, height),
        texture1: fitTextureToPlane(response.texture1, width, height),
      };
      return textures;
    }
  );
};
const onUpdate = (sceneParams: any) => {
  if (!sceneParams.isRendererSet) {
    addMeshesToScene(sceneParams.scene1, sceneParams.meshArrays.scene1);
    addMeshesToScene(sceneParams.scene2, sceneParams.meshArrays.scene2);

    const clearPass = new ClearPass();

    const clearMaskPass = new ClearMaskPass();

    const maskPass1 = new MaskPass(sceneParams.scene1, sceneParams.camera);
    const maskPass2 = new MaskPass(sceneParams.scene2, sceneParams.camera);

    const texturePass1 = new TexturePass(sceneParams.loadedTextures.texture);
    const texturePass2 = new TexturePass(sceneParams.loadedTextures.texture1);

    const outputPass = new ShaderPass(CopyShader);

    const parameters = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBFormat,
      stencilBuffer: true,
    };

    const renderTarget = new THREE.WebGLRenderTarget(
      window.innerHeight,
      window.outerHeight,
      parameters
    );

    sceneParams.composer = new EffectComposer(
      sceneParams.renderer,
      renderTarget
    );
    sceneParams.composer.addPass(clearPass);

    sceneParams.composer.addPass(maskPass2);
    sceneParams.composer.addPass(texturePass2);
    sceneParams.composer.addPass(clearMaskPass);

    sceneParams.composer.addPass(maskPass1);
    sceneParams.composer.addPass(texturePass1);
    sceneParams.composer.addPass(clearMaskPass);
    sceneParams.composer.addPass(outputPass);

    const bloomStrength = 0.25;
    const bloomThreshold = 0;
    const bloomRadius = 0;

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.0,
      0.4,
      0.85
    );
    bloomPass.threshold = bloomThreshold;
    bloomPass.strength = bloomStrength;
    bloomPass.radius = bloomRadius;
    sceneParams.composer.addPass(bloomPass);
    sceneParams.isRendererSet = true;
    setTimeout(() => {
      console.log(sceneParams.div);
      // console.log(window);
      window.requestAnimationFrame(() => {
        console.log("sdsdsa");
      });
      window.resizeTo(90, 90);
    }, 5000);
  }

  const time = performance.now() * 0.001 + 6000;
  sceneParams.renderer.clear();
  if (sceneParams.composer) {
    sceneParams.composer.render(time);
  }
  let count = 0;
  sceneParams.scene1.traverse((mesh) => {
    if (mesh.isMesh) {
      functionScene1(mesh, time, count);
      count++;
    }
  });
  count = 0;
  sceneParams.scene2.traverse((mesh) => {
    if (mesh.isMesh) {
      functionScene2(mesh, time, count);
      count++;
    }
  });
};

const functionScene1 = (mesh, time, i) => {
  const posX =
    Math.sin(i * time * 0.26 * (1.03 + 0.5 * Math.cos(0.21 * i))) * 3 + 0.5;
  const posY = Math.sin(i + time * 0.3) * 7 + 0.5;
  const posZ =
    Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 5;

  mesh.position.set(posX, posY, posZ);
};

const functionScene2 = (mesh, time, i) => {
  const posX =
    Math.sin(i * time * 0.26 * (1.03 + 0.5 * Math.cos(0.21 * i))) *
    (3 + (i + 1));
  const posY = Math.sin(i + time * 0.3) * 7 + i;
  const posZ =
    Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 7 + 0.5;

  mesh.position.set(posX, posY, posZ);
};

// const onUpdate = (sceneParams: IsceneParams, sceneParams: any) => {
//   if (!sceneParams.isRendererSet) {
//     sceneParams.renderer.setClearColor(0x000000);
//     sceneParams.renderer.autoClear = false;

//   // sceneParams.camera.position.y =
//   //   Math.sin(time * 0.05) * Math.tan(time * 0.05) * 8;
// };

export const PayTheRentScene: FunctionBasedScene = {
  name: "Pay the rent",
  scene: null,
  camera: null,
  sceneParams: { isRendererSet: false, composer: null },
  sceneLength: 1000,
  init: init,
  onUpdate: onUpdate,
};
