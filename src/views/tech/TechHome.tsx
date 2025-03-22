import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import { useCallback, useMemo } from "react";
import { Scene } from "three";
import {
  useSetWindowState,
  updateSceneMeshesUniform,
  startSceneElementAnimations,
  AnimationConfig,
  InteractiveScene,
  SceneData,
  useSceneData,
} from "art-os-package";

interface TechHomeProps {
  contentHeight: number;
}

export const TechHome = ({ contentHeight }: TechHomeProps) => {
  const onScroll = useOnScrollEventConfig(contentHeight);
  useSetWindowState();
  const configId = "tech-home";
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
      events: [onScroll],
    };
  }, [configData, sceneData, onScroll]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

const useOnScrollEventConfig = (contentHeight: number) => {
  const updateOnScroll = useCallback(
    (scene: Scene, event: Event) => {
      const { scrollY } = event as Event & { scrollY: number };
      const scrollPercentage = scrollY / contentHeight;
      updateSceneMeshesUniform(
        scene as InteractiveScene,
        "hjd-points",
        "uScroll",
        scrollPercentage * 30
      );
      const opacity = 1 - scrollPercentage * 2;
      updateSceneMeshesUniform(
        scene as InteractiveScene,
        "hjd-chrome",
        "uOpacity",
        opacity
      );
    },
    [contentHeight]
  );

  return useMemo(
    () => ({
      eventKey: "scroll",
      eventFunction: updateOnScroll,
    }),
    [updateOnScroll]
  );
};
