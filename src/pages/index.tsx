import FullScreenLayout from "components/layout/FullScreenLayout";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import type { NextPage } from "next";
import { useCallback, useMemo, useRef, useState } from "react";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { useSceneData } from "visual/set-up/config/useSceneData";
import { gsap } from "gsap";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";
import { useFadeOut } from "components/animations/gsap-timelines/useFadeOut";
import { AnimationConfig } from "visual/display/animation/animation.types";
import { SceneData } from "visual/set-up/config/config.types";
import Head from "next/head";

const ROUTING_DELAY = 1500;
const Home: NextPage = () => {
  useSetWindowState();
  const handleRouting = useHandleRouting("bio");
  const enterTransitionRef = useRef<SVGPathElement | null>(null);
  const buttonRef = useRef<HTMLElement | null>(null);
  const onClickAnimation = useOnClickAnimation();
  const [onEnterClicked, setOnEnterClicked] = useState<boolean>(false);
  const fadeOut = useFadeOut();

  const onEnterClick = useCallback(() => {
    setOnEnterClicked(true);
    onClickAnimation(enterTransitionRef.current);
    if (buttonRef.current) {
      fadeOut(buttonRef.current);
    }

    setTimeout(() => {
      handleRouting();
    }, ROUTING_DELAY);
  }, [
    buttonRef,
    onClickAnimation,
    setOnEnterClicked,
    handleRouting,
    enterTransitionRef,
  ]);
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
        <svg
          className="overlay"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            zIndex: 10,
            position: "absolute",
            bottom: 0,
            display: onEnterClicked ? "block" : "none",
          }}
        >
          <path
            ref={enterTransitionRef}
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
        <HomeSceneContent />
      </FullScreenLayout>
    </>
  );
};

const useOnClickAnimation = () => {
  return useCallback((overlayPath: SVGPathElement | null) => {
    if (!overlayPath) return;
    gsap
      .timeline({})
      .set(overlayPath, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      });
  }, []);
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
