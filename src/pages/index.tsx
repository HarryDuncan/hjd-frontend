"use client";

import { useHandleRouting } from "hooks/routing/useHandleRouting";
import type { NextPage } from "next";
import { Suspense, useCallback } from "react";
import Head from "next/head";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";
import { SceneLoadingFallback } from "components/loading/fallbacks/scene-loading/SceneLoadingFallback";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import { CallToAction } from "components/buttons/call-to-action/CallToAction";

const HOME_SCENE_ID = "home-scene";
const Home: NextPage = () => {
  const handleRouting = useHandleRouting("bio");

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
      <TitlePageLayout>
        <CallToAction onClick={onEnterClick} text="Enter" />
        <Suspense fallback={<SceneLoadingFallback />}>
          <DynamicAnimatedScene configId={HOME_SCENE_ID} />
        </Suspense>
      </TitlePageLayout>
    </>
  );
};

export default Home;
