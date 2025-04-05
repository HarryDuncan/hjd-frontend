"use client";

import { useHandleRouting } from "hooks/routing/useHandleRouting";
import type { NextPage } from "next";
import { Suspense, useCallback, useRef } from "react";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";
import Head from "next/head";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";
import { HomeContainerBottom } from "views/home/Home.styles";
import { SceneLoadingFallback } from "components/loading/fallbacks/scene-loading/SceneLoadingFallback";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";

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
        <BottomSection />
        <Suspense fallback={<SceneLoadingFallback />}>
          <DynamicAnimatedScene configId={HOME_SCENE_ID} />
        </Suspense>
      </TitlePageLayout>
    </>
  );
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
