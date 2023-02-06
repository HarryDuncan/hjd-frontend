import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSetUpScene } from "visuals/hooks/scene-data/useSetUpScene";
import { Asset } from "visuals/hooks/use-assets/types";
import { useInteractiveScene } from "visuals/hooks/use-interactive-scene/useInteractiveScene";
import { SceneData } from "visuals/components/interactive-scene/types";
import { useMeshes } from "visuals/hooks/scene-data/useMeshes";
import PostProcessor from "visuals/components/post-processor/PostProcessor";
import { useEventsWithMesh } from "visuals/hooks/use-events/useEvents";
import { ThreeJsParams } from "visuals/hooks/use-three-js/types";
import { InteractionEventObject } from "visuals/helpers/interactions/types";
import { useSceneComponents } from "visuals/hooks/scene-data/useSceneComponents";
import { useLights } from "visuals/hooks/scene-data/useLights";
import { setSceneProperties } from "visuals/helpers/scene/setSceneProperties";
import { EMPTY_SCENE_DATA } from "visuals/visual-configs/default-configs/emptyData";
import { defaultFormatSceneData } from "visuals/visual-configs/default-configs/defaultFormatSceneData";
import { RootContainer } from "visuals/components/root-container";

interface InteractiveSceneProps {
  threeJsParams: ThreeJsParams;
  interactions: InteractionEventObject[];
  assets: Asset[];
  materialParams;
  sceneFunctions;
  visualComponentConfig;
  formatSceneData: (assets: Asset[], materialParams) => SceneData;
  events?;
  animations?;
}

const InteractiveScene = ({
  parameters,
}: {
  parameters: InteractiveSceneProps;
}) => {
  const {
    threeJsParams,
    interactions = [],
    assets,
    materialParams,
    sceneFunctions,
    visualComponentConfig,
    formatSceneData = defaultFormatSceneData,
    events,
    animations = [],
  } = parameters;
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
    materialParams,
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
  useAddEvent(initializedMeshes, events);

  const [isInit, setIsInit] = useState(false);
  const initializeSceneWithData = useCallback(() => {
    if (scene) {
      setIsInit(true);
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
  }, [initializedMeshes, update, postProcessor, renderer, camera, setIsInit]);

  useEffect(() => {
    if (!isInit) {
      initializeSceneWithData();
    }
  }, [initializeSceneWithData, isInit]);

  return (
    <RootContainer containerRef={container} config={visualComponentConfig} />
  );
};

const useSceneData = (
  initializedAssets: Asset[],
  areAssetsInitialized: boolean,
  materialParams,
  formatSceneData: (assets: Asset[], materialParams) => SceneData
): SceneData =>
  useMemo(() => {
    if (!areAssetsInitialized) return EMPTY_SCENE_DATA;
    const sceneData = formatSceneData(initializedAssets, materialParams);
    return sceneData;
  }, [areAssetsInitialized]);

const useAddEvent = (initializedMeshes, events) => {
  useEventsWithMesh(initializedMeshes[0], events);
};

export default InteractiveScene;
