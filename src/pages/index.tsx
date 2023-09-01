import FullScreenLayout from "components/layout/FullScreenLayout";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useHandleRouting } from "hooks/useHandleRouting";
import { useSceneConfigAndAssets } from "hooks/useSceneConfigAndAssets";
import type { NextPage } from "next";
import { useCallback, useMemo, useRef } from "react";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { CustomAnimationConfig } from "visual/display/animation/animation.types";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { SceneData } from "visual/display/components/interactive-scene/types";
import { useSceneData } from "visual/set-up/config/useSceneData";
import { gsap } from "gsap";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";

const ROUTING_DELAY = 1500;
const Home: NextPage = () => {
  useSetWindowState();
  const handleRouting = useHandleRouting("bio");
  const gridRef = useRef<SVGPathElement | null>(null);
  const onClickAnimation = useOnClickAnimation();

  const onEnterClick = () => {
    onClickAnimation(gridRef.current);
    setTimeout(() => {
      handleRouting();
    }, ROUTING_DELAY);
  };
  return (
    <FullScreenLayout>
      <CircleActionButton onClick={onEnterClick} buttonText={"ENTER"} />
      <svg
        className="overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 10, position: "absolute", bottom: 0 }}
      >
        <path
          ref={gridRef}
          className="overlay__path"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
      <HomeSceneContent />
    </FullScreenLayout>
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
      animations: animationConfig as CustomAnimationConfig[],
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

export default Home;
