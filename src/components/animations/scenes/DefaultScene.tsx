import {
  useSceneData,
  startSceneElementAnimations,
  InteractiveScene,
  SceneNode,
} from "art-os-package";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import { useMemo } from "react";

export const DefaultScene = () => {
  const configId = "default-scene";
  const { areAssetsInitialized, initializedAssets, configData } =
    useSceneConfigAndAssets(configId);
  const sceneData = useSceneData(
    configData,
    initializedAssets,
    areAssetsInitialized
  );
  const sceneParameters = useMemo(() => {
    if (!configData) return null;
    const { animationConfig } = configData;
    return {
      sceneFunctions: {
        onTimeUpdate: (scene: InteractiveScene) => {
          startSceneElementAnimations(scene);
        },
      },
      interactionEvents: [],
      sceneData,
      animations: animationConfig,
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <SceneNode {...sceneParameters} sceneData={sceneData} />
  ) : null;
};
