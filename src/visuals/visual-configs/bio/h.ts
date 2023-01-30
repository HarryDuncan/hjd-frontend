import { Vector3 } from "three";
import {
  COMPONENT_TYPES,
  TextProps,
} from "visuals/components/three-js-components/components/threeJsComponents.types";
import { ASSET_TYPES } from "visuals/hooks/use-assets/types";
import { InteractiveScene } from "visuals/interactive-scene";

export const formatH = () => {
  const text = {
    componentType: COMPONENT_TYPES.TEXT,
    componentProps: {
      fontUrl: "../fonts/Harryduncan.woff",
      text: "H",
      name: `title-h`,
      position: new Vector3(0, 0, 0),
    } as TextProps,
  };
  return { isSceneDataInitialized: true, sceneComponents: [text] };
};
export const h = {
  threeJsParams: {
    camera: { position: { x: 0, y: 0, z: 2 } },
  },
  formatSceneData: formatH,
  assets: [
    {
      name: "uCoverImage",
      url: "../images/campaigns/AidsDay.jpg",
      assetType: ASSET_TYPES.Texture,
    },
  ],

  sceneFunctions: {
    onTimeUpdate: (scene: InteractiveScene) => {},
  },
};
