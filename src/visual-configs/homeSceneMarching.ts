import { Asset } from "models/visuals/types";
import { Vector3 } from "three";
import {
  InteractiveThreeScene,
  SceneData,
} from "visual/components/interactive";
import { animateMarchingCube } from "visual/components/three-js-components/components/marching-cubes/marchingCubeAnimation";
import {
  COMPONENT_TYPES,
  ThreeJsComponentType,
} from "visual/components/three-js-components/components/threeJsComponents.types";
import { LIGHT_TYPES } from "visual/components/three-js-components/lights/lights.types";
import {
  ENV_MAP_TYPES,
  MATERIAL_TYPES,
} from "visual/helpers/materials/materials.constants";
import {
  EnvMapMaterialParameters,
  EnvMapType,
  MaterialType,
} from "visual/helpers/materials/materials.types";

export const formatSceneData = (_assets: Asset[]): SceneData => {
  return {
    isSceneDataInitialized: true,
    meshConfigs: [],
    sceneComponents: [
      {
        componentType: COMPONENT_TYPES.MARCHING_CUBES as ThreeJsComponentType,
        componentProps: {
          name: "marching-cubes-home",
          parameters: {
            resolution: 80,
          },
          material: {
            material: {
              imageUrl: "assets/cube-mapping/sculpture",
              envMapType: ENV_MAP_TYPES.REFLECTION as EnvMapType,
            } as EnvMapMaterialParameters,
            materialType: MATERIAL_TYPES.ENV_MAP as MaterialType,
          },
        },
      },
    ],
    lights: [
      {
        name: "ambient-light",
        lightType: LIGHT_TYPES.AMBIENT,
        props: { intensity: 1.0 },
      },
      {
        name: "point-light",
        lightType: LIGHT_TYPES.POINT_LIGHT,
        props: { color: "#ffffff", position: new Vector3(4, 4, 3) },
      },
      {
        name: "directional-light",
        lightType: LIGHT_TYPES.DIRECTIONAL_LIGHT,
        props: { color: "#ffffff", position: new Vector3(4, 4, 3) },
      },
    ],
    sceneObjects: [],
  };
};

export const homeScene = () => {
  return {
    threeJsParams: {
      camera: { position: { x: 0, y: 0, z: 10 } },
    },
    assets: [],
    sceneFunctions: {
      onTimeUpdate: (scene: InteractiveThreeScene) => {
        animateMarchingCube(scene);
      },
    },
    interactions: [],
    formatSceneData,
    animations: [],
  };
};
