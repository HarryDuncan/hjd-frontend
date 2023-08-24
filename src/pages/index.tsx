import { EnterButton } from "components/home/enter-button/EnterButton";
import FullScreenLayout from "components/layout/FullScreenLayout";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useSceneConfigAndAssets } from "hooks/useSceneConfigAndAssets";
import type { NextPage } from "next";
import { useMemo } from "react";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { CustomAnimationConfig } from "visual/display/animation/animation.types";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { SceneData } from "visual/display/components/interactive-scene/types";
import { animateMarchingCube } from "visual/display/scene-elements/components/marching-cubes/marchingCubeAnimation";
import { useSceneData } from "visual/set-up/config/useSceneData";

const Home: NextPage = () => {
  useSetWindowState();

  const handleRouting = useHandleRouting("bio");
  const onEnterClick = () => {
    handleRouting();
  };
  return (
    <FullScreenLayout>
      <EnterButton onClick={onEnterClick} />
      <HomeSceneContent />
    </FullScreenLayout>
  );
};

const HomeSceneContent = () => {
  const configId = "home-scene";
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
          animateMarchingCube(scene);
        },
      },
      interactionEvents: [],
      sceneData,
      animations: animationConfig as CustomAnimationConfig[],
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

export default Home;
