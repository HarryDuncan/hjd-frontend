import Layout from "components/layout/DefaultLayout";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
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
  return (
    <Layout topPadding={false}>
      <HomeSceneContent />
    </Layout>
  );
};

const HomeSceneContent = () => {
  const { areAssetsInitialized, initializedAssets, configData } =
    useSceneConfigAndAssets("home-scene");
  const sceneData = useSceneData(
    configData,
    initializedAssets,
    areAssetsInitialized
  );
  const sceneParameters = useMemo(() => {
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
  }, [configData, areAssetsInitialized, initializedAssets]);

  return sceneData !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

export default Home;
