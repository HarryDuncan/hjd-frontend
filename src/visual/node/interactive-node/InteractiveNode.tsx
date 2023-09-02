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
  const {
    currentFrameRef,
    clock,
    postProcessor,
    renderer,
    camera,
    container,
    orbitControls,
  } = useSetUpScene(threeJs);

  const sceneElements = useMemo(
    () => ({
      meshes,
      lights,
      sceneComponents,
      orbitControls,
    }),
    [meshes, lights, sceneComponents, orbitControls]
  );
  const scene = useInteractiveScene(
    [],
    sceneFunctions,
    events,
    animations,
    sceneElements
  );
  const { update, pause } = useThreadWithPostProcessor(
    postProcessor,
    currentFrameRef,
    clock,
    scene,
    camera
  );

  useEffect(() => () => pause(), [pause]);

  const initializeSceneWithData = useCallback(() => {
    if (scene && camera && renderer) {
      setSceneProperties(sceneProperties, scene);
      postProcessor.current = new PostProcessor({
        renderer,
        scene,
        camera,
        passes: [],
      });
      update();
    }
  }, [scene, update, postProcessor, renderer, camera, sceneProperties]);

  useEffect(() => {
    initializeSceneWithData();
  }, [initializeSceneWithData]);

  return (
    <RootContainer containerRef={container} sceneProperties={sceneProperties} />
  );
};
