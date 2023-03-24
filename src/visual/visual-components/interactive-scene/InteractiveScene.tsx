import React, { useCallback, useEffect, useMemo } from "react";
import { useSetUpScene } from "visual/hooks/scene-data/useSetUpScene";
import { RootContainer } from "../../components/container/root-container";
import { Asset } from "visual/hooks/use-assets/types";
import { useInteractiveScene } from "visual/hooks/use-interactive-scene/useInteractiveScene";
import { SceneData } from "visual/components/interactive/scene/types";
import { useMeshes } from "visual/hooks/scene-data/useMeshes";
import PostProcessor from "visual/components/post-processor/PostProcessor";
import { ThreeJsParams } from "visual/hooks/use-three-js/types";
import { InteractionEventObject } from "visual/helpers/interactions/types";
import { useSceneComponents } from "visual/hooks/scene-data/useSceneComponents";
import { useLights } from "visual/hooks/scene-data/useLights";
import { setSceneProperties } from "visual/helpers/scene/setSceneProperties";
import { useEvents } from "visual/hooks/use-events/useEvents";
import { EMPTY_SCENE_DATA } from "constants/visual/visual.constants";
import { defaultFormatSceneData } from "visual-configs/default/defaultFormatSceneData";

interface InteractiveSceneProps {
  threeJsParams: ThreeJsParams;
  interactions: InteractionEventObject[];
  assets: Asset[];
  sceneFunctions;
  visualComponentConfig;
  formatSceneData: (assets: Asset[]) => SceneData;
  events?;
  animations?;
}

const InteractiveScene = ({
  threeJsParams,
  interactions = [],
  assets,
  materialParams,
  sceneFunctions,
  visualComponentConfig,
  formatSceneData = defaultFormatSceneData,
  events = [],
  animations = [],
}: InteractiveSceneProps) => {
  const {
    areAssetsInitialized,
    initializedAssets,
    update,
    postProcessor,
    renderer,
    camera,
    container,
  } = useSetUpScene(threeJsParams, assets);

  const sceneData = useSceneData(
    initializedAssets,
    areAssetsInitialized,
    formatSceneData
  );

  const initializedMeshes = useMeshes(sceneData?.meshConfigs, interactions);
  const sceneComponents = useSceneComponents(sceneData.sceneComponents);
  const lights = useLights(sceneData.lights);
  const scene = useInteractiveScene(
    interactions,
    sceneFunctions,
    {},
    sceneData?.sceneObjects ?? [],
    sceneData?.isSceneDataInitialized ?? false
  );
  useEvents(scene, events);

  const initializeSceneWithData = useCallback(() => {
    if (scene) {
      initializedMeshes.forEach((mesh) => scene.add(mesh));
      lights.forEach((light) => scene.add(light));
      setSceneProperties(sceneData.sceneProperties, scene);
      sceneComponents.forEach((component) => scene.add(component));
      scene.addAnimations(animations);
      postProcessor.current = new PostProcessor({
        renderer,
        scene,
        camera,
        passes: [],
      });
      update();
    }
  }, [scene, initializedMeshes, update, postProcessor, renderer, camera]);

  useEffect(() => {
    initializeSceneWithData();
  }, [initializeSceneWithData]);

  return (
    <RootContainer containerRef={container} config={visualComponentConfig} />
  );
};

const useSceneData = (
  initializedAssets: Asset[],
  areAssetsInitialized: boolean,
  formatSceneData: (assets: Asset[]) => SceneData
): SceneData => {
  return useMemo(() => {
    console.log(formatSceneData);
    if (!areAssetsInitialized) return EMPTY_SCENE_DATA;
    const sceneData = formatSceneData(initializedAssets);
    return sceneData;
  }, [areAssetsInitialized]);
};

export default InteractiveScene;
