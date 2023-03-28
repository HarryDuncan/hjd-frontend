import { Asset } from "models/visuals/types";
// import { Vector3 } from "three";
// import {
//   COMPONENT_TYPES,
//   TextProps,
// } from "visual/components/three-js-components/components/threeJsComponents.types";
import { ASSET_TYPES } from "visual/hooks/use-assets/types";

// export const onPageScroll = (scene: InteractiveScene, _event) => {

//   const meshes = getMeshesByIdentifier(scene, "title");
//   const mesh = meshes[0];
//   if (!mesh) return;

//   const rotateAndUpdate = () => {
//     const scrollPercentage = window.scrollY / window.innerHeight;
//     const angle = 360 * scrollPercentage;
//     const radians = (angle * Math.PI) / 180;
//     mesh?.rotation.set(0, radians, 0);
//   };

//   if (window.scrollY < window.innerHeight && mesh.name === "title-H") {
//     // requestAnimationFrame(rotateAndUpdate);
//     rotateAndUpdate();
//   } else if (mesh.name === "title-H" && mesh?.rotation.y !== 0) {
//     mesh?.rotation.set(0, 0, 0);
//   }
//   if (
//     window.scrollY > window.innerHeight &&
//     window.scrollY < window.innerHeight * 2 &&
//     mesh.name === "title-J"
//   ) {
//     rotateAndUpdate();
//   } else if (mesh.name === "title-J" && mesh?.rotation.y !== 0) {
//     mesh?.rotation.set(0, 0, 0);
//   }
//   if (
//     window.scrollY > window.innerHeight * 2 &&
//     window.scrollY < window.innerHeight * 3 &&
//     mesh.name === "title-D"
//   ) {
//     rotateAndUpdate();
//   } else if (mesh.name === "title-D" && mesh?.rotation.y !== 0) {
//     mesh?.rotation.set(0, 0, 0);
//   }
// };

export const formatLetter =
  (_letterChar: string) => (_loadedAssets: Asset[]) => {
    // const text = {
    //   componentType: COMPONENT_TYPES.TEXT,
    //   componentProps: {
    //     fontUrl: "../fonts/Harryduncan.woff",
    //     text: letterChar,
    //     materialProps: {
    //       materialType: MATERIAL_TYPES.standard,
    //       materialParameters: {
    //         map: loadedAssets[0].data,
    //       },
    //     },
    //     name: `title-${letterChar}`,
    //     position: new Vector3(-0.75, 0.75, 0),
    //   } as TextProps,
    // };
    // return { isSceneDataInitialized: true, sceneComponents: [text] };
  };

export const letters = {
  threeJsParams: {
    camera: { position: { x: 0, y: 0, z: 2 } },
  },
  assets: [
    {
      name: "image",
      url: "../images/content/bio1.jpg",
      assetType: ASSET_TYPES.Texture,
    },
  ],

  visualComponentConfig: {
    viewHeight: "100%",
    viewWidth: "50%",
    // },
    // sceneFunctions: {
    //   onPageScroll,
    // },
  },
};
