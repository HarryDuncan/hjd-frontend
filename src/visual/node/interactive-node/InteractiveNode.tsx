import React, { useCallback, useEffect, useMemo } from "react";
import { RootContainer } from "../root/root-container";
import { useInteractiveScene } from "visual/display/components/interactive-scene/useInteractiveScene";
import PostProcessor from "visual/display/components/post-processor/PostProcessor";
import { setSceneProperties } from "visual/display/helpers/scene/setSceneProperties";
import { useThreadWithPostProcessor } from "visual/display/hooks/use-thread";
import { useSetUpScene } from "visual/display/hooks/scene-data/useSetUpScene";
import { InteractiveNodeProps } from "./interactiveNode.types";

export const InteractiveNode = ({
  sceneFunctions,
  animations = [],
  events,
  sceneData: { threeJs, lights, meshes, sceneComponents, sceneProperties },
}: InteractiveNodeProps) => {
  const { currentFrameRef, clock, renderer, camera, container, orbitControls } =
    useSetUpScene(threeJs);

  const scene = useInteractiveScene(
    sceneFunctions,
    events,
    animations,
    meshes,
    lights,
    sceneComponents,
    orbitControls,
    sceneProperties
  );

  const { update, pause, postProcessor } = useThreadWithPostProcessor(
    currentFrameRef,
    clock,
    scene,
    camera,
    renderer
  );

  const initializeSceneWithData = useCallback(() => {
    if (postProcessor.current) {
      update();
    }
  }, [update, postProcessor]);

  useEffect(() => () => pause(), [pause]);

  useEffect(() => {
    initializeSceneWithData();
  }, [initializeSceneWithData]);

  return (
    <RootContainer containerRef={container} sceneProperties={sceneProperties} />
  );
};
