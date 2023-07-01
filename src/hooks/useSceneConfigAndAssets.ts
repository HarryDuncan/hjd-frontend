import { useMemo } from "react";
import { useAssets } from "visual/set-up/assets/use-assets/useAssets";
import { useFetchConfig } from "visual/set-up/config/useFetchConfig";
import { SceneConfig } from "visual/set-up/config/config.types";

export const useSceneConfigAndAssets = (configId: string) => {
  const selectedSceneFilePath = configId ?? "";
  const sceneConfigData = useFetchConfig(
    `config/${selectedSceneFilePath}.json`
  );

  const configData = useSelectedConfig(sceneConfigData);
  const { areAssetsInitialized, initializedAssets } = useAssets(
    configData.assets ?? []
  );

  return { areAssetsInitialized, initializedAssets, configData };
};

const useSelectedConfig = (sceneConfigData: SceneConfig[]) => {
  const index = 3;
  return useMemo(() => {
    const selectedScene = sceneConfigData[index];
    if (selectedScene) {
      return selectedScene;
    }
    console.warn(`error retrieving scene config at index ${index}`);
    return sceneConfigData[0];
  }, [index, sceneConfigData]);
};
