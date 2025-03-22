import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import type { NextPage } from "next";
import { Suspense, useCallback, useMemo, useRef } from "react";
import {
  useSetWindowState,
  startSceneElementAnimations,
  InteractiveScene,
  useSceneData,
  AnimationConfig,
  SceneData,
  SceneNode,
} from "art-os-package";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";

import Head from "next/head";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";
import { HomeContainerBottom } from "views/home/Home.styles";
import { SceneLoadingFallback } from "components/loading/fallbacks/scene-loading/SceneLoadingFallback";

const Home: NextPage = () => {
  useSetWindowState();
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
      <TitlePageLayout>
        <BottomSection />
        <Suspense fallback={<SceneLoadingFallback />}>
          <HomeSceneContent />
        </Suspense>
      </TitlePageLayout>
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
    <SceneNode {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

const BottomSection = () => {
  const handleRouting = useHandleRouting("bio");
  const buttonRef = useRef<HTMLElement | null>(null);
  const onEnterClick = useCallback(() => {
    handleRouting();
  }, [handleRouting]);

  return (
    <HomeContainerBottom>
      <CircleActionButton
        ref={buttonRef}
        onClick={onEnterClick}
        title="ENTER"
      />
    </HomeContainerBottom>
  );
};

export default Home;
