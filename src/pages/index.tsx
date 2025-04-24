"use client";

import { useHandleRouting } from "hooks/routing/useHandleRouting";
import type { NextPage } from "next";
import { Suspense, useCallback } from "react";
import Head from "next/head";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";
import { HomeContainerBottom } from "views/home/Home.styles";
import { SceneLoadingFallback } from "components/loading/fallbacks/scene-loading/SceneLoadingFallback";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import { SVGButton } from "components/buttons/SVGButton";

const HOME_SCENE_ID = "home-scene";
const Home: NextPage = () => {
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
        <Suspense fallback={<SceneLoadingFallback />}>
          <DynamicAnimatedScene configId={HOME_SCENE_ID} />
        </Suspense>
        <BottomSection />
      </TitlePageLayout>
    </>
  );
};

const BottomSection = () => {
  const handleRouting = useHandleRouting("bio");

  const onEnterClick = useCallback(() => {
    handleRouting();
  }, [handleRouting]);

  return (
    <HomeContainerBottom>
      <SVGButton onClick={onEnterClick} title="ENTER" />
    </HomeContainerBottom>
  );
};

export default Home;
