import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useSceneConfigAndAssets } from "hooks/useSceneConfigAndAssets";
import { TECH_ACTIONS } from "models/tech/tech.types";
import { useTechContex } from "models/tech/techProvider";
import { TechActions } from "models/tech/techStateReducer";
import { useCallback, useMemo } from "react";
import { Scene } from "three";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { CustomAnimationConfig } from "visual/display/animation/animation.types";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { SceneData } from "visual/display/components/interactive-scene/types";
import { animateMarchingCube } from "visual/display/scene-elements/components/marching-cubes/marchingCubeAnimation";
import { useSceneData } from "visual/set-up/config/useSceneData";

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
      events: [onScroll],
    };
  }, [configData, sceneData, onScroll]);

  return sceneData !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

const useOnScrollEventConfig = (contentHeight: number) => {
  const updateOnScroll = useCallback(
    (scene: Scene, event: Event) => {
      //  console.log("asdasd");
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
