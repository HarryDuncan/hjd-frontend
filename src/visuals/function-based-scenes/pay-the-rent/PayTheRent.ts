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
import { Camera, Group, Object3D } from "three";
import { loadGLTF } from "visuals/loaders/loadGLTF";
import { FunctionBasedScene } from "components/animation-widget/types";

interface PTRSceneData {
  assetUrls: Record<string, string>;
}
interface SceneParams {
  scene1: any;
  scene2: any;
  meshArrays: any;
  sceneProps: any;
  textures?: any;
}

const init = async (sceneProps: PTRSceneData) => {
  const camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
  camera.position.set(0, 0, 30);

  const mainScene = new THREE.Scene();
  const scene1 = new THREE.Scene();
  const scene2 = new THREE.Scene();

  let url = sceneProps.assetUrls.mainMesh;
  const mainMesh = await loadGLTF(url);
  console.log(mainMesh);

  return { camera, scene: mainScene, sceneParams: {} };
};

// const formatMainMesh = (mesh: Group) => {
//   const root = mesh.scene;
//   var scale = 2;
//   root.scale.set(scale, scale, scale);
//   root.castShadow = true;

//   let count = 0;
//   const scene1Meshes: Object3D[] = [];
//   const scene2Meshes: Object3D[] = [];

//   const material = initializeThreeMaterial(THREE_MESH_MATERIAL_TYPES.PHONG, {});
//   material.side = THREE.DoubleSide;
//   root.traverse((o) => {
//     //@ts-ignore
//     if (o.isMesh) {
//       //@ts-ignore
//       o.material = material;
//       if (count % 2 === 0) {
//         scene1Meshes.push(o);
//       } else {
//         scene2Meshes.push(o);
//       }
//     }
//     count++;
//   });
// };

const onUpdate = (sceneParams: any) => {
  console.log(sceneParams);
};
// new Promise((resolve, reject) => {
//   const loader = new GLTFLoader();

//   loader.load(
//     url,
//     (gltf) => {
//       loadTextureProps([
//         sceneParams.sceneProps.texture1,
//         sceneParams.sceneProps.texture2,
//       ])
//         .then((response) => {
//           sceneParams.textures = {
//             texture: fitTextureToPlane(
//               response.texture,
//               framework.viewportWidth,
//               framework.viewportHeight
//             ),
//             texture1: fitTextureToPlane(
//               response.texture1,
//               framework.viewportWidth,
//               framework.viewportHeight
//             ),
//           };

//           sceneParams.meshArrays = {
//             scene1: scene1Meshes,
//             scene2: scene2Meshes,
//           };

//           resolve({ camera, scene, sceneParams });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     },
//     (xhr) => {},
//     (error) => {
//       reject(error);
//     }
//   );
// });

// const functionScene1 = (mesh, time, i) => {
//   const posX =
//     Math.sin(i * time * 0.26 * (1.03 + 0.5 * Math.cos(0.21 * i))) * 3 + 0.5;
//   const posY = Math.sin(i + time * 0.3) * 7 + 0.5;
//   const posZ =
//     Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.27 + 5;

//   mesh.position.set(posX, posY, posZ);
// };

// const functionScene2 = (mesh, time, i) => {
//   const posX =
//     Math.sin(i * time * 0.26 * (1.03 + 0.5 * Math.cos(0.21 * i))) *
//     (3 + (i + 1));
//   const posY = Math.sin(i + time * 0.3) * 7 + i;
//   const posZ =
//     Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 7 + 0.5;

//   mesh.position.set(posX, posY, posZ);
// };

// const onUpdate = (framework: IFramework, sceneParams: any) => {
//   if (!sceneParams.isRendererSet) {
//     framework.renderer.setClearColor(0x000000);
//     framework.renderer.autoClear = false;
//     addObjectsToScene(sceneParams.scene1, sceneParams.meshArrays.scene1);
//     addObjectsToScene(sceneParams.scene2, sceneParams.meshArrays.scene2);

//     const clearPass = new ClearPass();

//     const clearMaskPass = new ClearMaskPass();

//     const maskPass1 = new MaskPass(sceneParams.scene1, framework.camera);
//     const maskPass2 = new MaskPass(sceneParams.scene2, framework.camera);

//     const texturePass1 = new TexturePass(sceneParams.textures.texture);
//     const texturePass2 = new TexturePass(sceneParams.textures.texture1);

//     const outputPass = new ShaderPass(CopyShader);

//     const parameters = {
//       minFilter: THREE.LinearFilter,
//       magFilter: THREE.LinearFilter,
//       format: THREE.RGBFormat,
//       stencilBuffer: true,
//     };

//     framework.renderer.setClearColor(0x00000);
//     framework.renderer.autoClear = false;
//     framework.renderer.setSize(
//       framework.viewportWidth,
//       framework.viewportHeight
//     );
//     const renderTarget = new THREE.WebGLRenderTarget(
//       window.innerHeight,
//       window.outerHeight,
//       parameters
//     );

//     sceneParams.composer = new EffectComposer(framework.renderer, renderTarget);
//     sceneParams.composer.addPass(clearPass);

//     sceneParams.composer.addPass(maskPass2);
//     sceneParams.composer.addPass(texturePass2);
//     sceneParams.composer.addPass(clearMaskPass);

//     sceneParams.composer.addPass(maskPass1);
//     sceneParams.composer.addPass(texturePass1);
//     sceneParams.composer.addPass(clearMaskPass);
//     sceneParams.composer.addPass(outputPass);

//     const bloomStrength = 0.25;
//     const bloomThreshold = 0;
//     const bloomRadius = 0;

//     const bloomPass = new UnrealBloomPass(
//       new THREE.Vector2(window.innerWidth, window.innerHeight),
//       1.0,
//       0.4,
//       0.85
//     );
//     bloomPass.threshold = bloomThreshold;
//     bloomPass.strength = bloomStrength;
//     bloomPass.radius = bloomRadius;
//     sceneParams.composer.addPass(bloomPass);
//     sceneParams.isRendererSet = true;
//   }

//   const time = performance.now() * 0.001 + 6000;

//   framework.renderer.clear();
//   if (sceneParams.composer) {
//     sceneParams.composer.render(time);
//   }
//   let count = 0;
//   sceneParams.scene1.traverse((mesh) => {
//     if (mesh.isMesh) {
//       functionScene1(mesh, time, count);
//       count++;
//     }
//   });
//   count = 0;
//   sceneParams.scene2.traverse((mesh) => {
//     if (mesh.isMesh) {
//       functionScene2(mesh, time, count);
//       count++;
//     }
//   });

//   // framework.camera.position.y =
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
