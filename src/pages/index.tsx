import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useSceneConfig } from "hooks/visual/useSceneConfig";
import type { NextPage } from "next";
import { Suspense, useCallback, useRef } from "react";
import { useSetWindowState, SceneNode, SceneData } from "art-os-package";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";

import Head from "next/head";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";
import { HomeContainerBottom } from "views/home/Home.styles";
import { SceneLoadingFallback } from "components/loading/fallbacks/scene-loading/SceneLoadingFallback";
import { AnimatedSVG } from "components/loading/animated-svg/AnimatedSvg";

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
  const sceneConfig = useSceneConfig(configId);
  return sceneConfig ? (
    <SceneNode
      sceneConfig={sceneConfig as unknown as SceneData}
      loaderComponent={<AnimatedSVG />}
      events={[]}
      interactionEvents={[]}
    />
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
