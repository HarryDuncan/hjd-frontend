import { useMemo } from "react";
import { useFetchConfig, SceneConfig } from "art-os-package";

export const useSceneConfig = (configId: string) => {
  const selectedSceneFilePath = configId
    ? `${process.env.NEXT_PUBLIC_CONTENT_ROOT}/visual-config/${configId}.json`
    : "";
  const sceneConfigData = useFetchConfig(selectedSceneFilePath);
  const configData = useSelectedConfig(sceneConfigData);
  const formattedSceneConfig = useMemo(() => {
    if (!configData) return null;
    return {
      ...configData,
      assetPath: `${process.env.NEXT_PUBLIC_CONTENT_ROOT}/${
        configData?.assetPath || ""
      }`,
    };
  }, [configData]);
  return formattedSceneConfig;
};

const useSelectedConfig = (
  sceneConfigData: SceneConfig[] | null | undefined
) => {
  const index = 0;
  return useMemo(() => {
    if (!sceneConfigData) return undefined;
    const selectedScene = sceneConfigData[index];
    if (selectedScene) {
      return selectedScene;
    }
    console.warn(`error retrieving scene config at index ${index}`);
    return sceneConfigData[0];
  }, [index, sceneConfigData]);
};
