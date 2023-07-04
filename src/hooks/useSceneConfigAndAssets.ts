import { useMemo } from "react";
import { useAssets } from "visual/set-up/assets/use-assets/useAssets";
import { useFetchConfig } from "visual/set-up/config/useFetchConfig";
import { SceneConfig } from "visual/set-up/config/config.types";

export const useSceneConfigAndAssets = (configId: string) => {
  const selectedSceneFilePath =
    `${process.env.NEXT_PUBLIC_CONTENT_ROOT}visual-config/${configId}.json` ??
    "";
  const sceneConfigData = useFetchConfig(selectedSceneFilePath);
  const configData = useSelectedConfig(sceneConfigData);
  const { areAssetsInitialized, initializedAssets } = useAssets(
    configData.assets ?? []
  );

  return { areAssetsInitialized, initializedAssets, configData };
};

const useSelectedConfig = (sceneConfigData: SceneConfig[]) => {
  const index = 0;
  return useMemo(() => {
    const selectedScene = sceneConfigData[index];
    if (selectedScene) {
      return selectedScene;
    }
    console.warn(`error retrieving scene config at index ${index}`);
    return sceneConfigData[0];
  }, [index, sceneConfigData]);
};
