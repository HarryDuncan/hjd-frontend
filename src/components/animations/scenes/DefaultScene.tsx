import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import { useMemo } from "react";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { useSceneData } from "visual/set-up/config/useSceneData";

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
    <DynamicScene {...sceneParameters} sceneData={sceneData} />
  ) : null;
};
