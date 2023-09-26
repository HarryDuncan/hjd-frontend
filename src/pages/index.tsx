import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import type { NextPage } from "next";
import { useCallback, useMemo, useRef } from "react";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { useSceneData } from "visual/set-up/config/useSceneData";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";
import { AnimationConfig } from "visual/display/animation/animation.types";
import { SceneData } from "visual/set-up/config/config.types";
import Head from "next/head";
import FullScreenLayout from "layout/FullScreenLayout";

const Home: NextPage = () => {
  useSetWindowState();
  const handleRouting = useHandleRouting("bio");
  const buttonRef = useRef<HTMLElement | null>(null);
  const onEnterClick = useCallback(() => {
    handleRouting();
  }, [handleRouting]);
  return (
    <>
      <Head>
        <title>Harry J Dee</title>
        <meta
          name="Harry J Dee"
          content="The online virtual headquarters of artist Harry J Dee"
          key="desc"
        />
      </Head>
      <FullScreenLayout>
        <CircleActionButton
          ref={buttonRef}
          onClick={onEnterClick}
          buttonText="ENTER"
        />
        <HomeSceneContent />
      </FullScreenLayout>
    </>
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
          startSceneElementAnimations(scene);
        },
      },
      interactionEvents: [],
      sceneData,
      animations: animationConfig as AnimationConfig[],
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

export default Home;
