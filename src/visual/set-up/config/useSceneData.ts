import { SceneData } from "visual/display/components/interactive-scene";
import { initializeVideos } from "visual/set-up/assets/animated-texture/setUpVideos";
import { formatSceneComponentConfigs } from "visual/set-up/config/components/formatSceneComponentConfigs";
import { getLightsFromConfig } from "visual/set-up/config/lights/getLightsFromConfig";
import { formatGlobalMaterials } from "visual/set-up/config/material/formatGlobalMaterials";
import { getMeshesFromConfig } from "visual/set-up/config/mesh/getMeshesFromConfig";
import { SceneConfig } from "./config.types";
import { Asset } from "../assets/use-assets/types";
import { getScenePropertiesFromConfig } from "./scene-properties/setSceneProperties";
import { useThreeJsFromConfig } from "./three-js/useThreeJsFromConfig";
import { useMemo } from "react";

export const useSceneData = (
  config: SceneConfig,
  assets: Asset[],
  areAssetsInitialized
): SceneData | null => {
  initializeVideos(assets);
  const threeJs = useThreeJsFromConfig(config.threeJsConfig);
  return useMemo(() => {
    if (!areAssetsInitialized) return null;
    const materials = formatGlobalMaterials(assets, config);
    const meshes = getMeshesFromConfig(assets, materials, config);
    const lights = getLightsFromConfig(config);
    const sceneComponents = formatSceneComponentConfigs(config, materials);
    const sceneProperties = getScenePropertiesFromConfig(
      config.scenePropertiesConfig
    );
    return {
      threeJs,
      meshes: meshes ?? [],
      sceneComponents: sceneComponents ?? [],
      lights: lights ?? [],
      sceneProperties,
    };
  }, [, config, assets, areAssetsInitialized]);
};