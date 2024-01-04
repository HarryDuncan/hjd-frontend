import { RootContainer } from "../root/root-container";
import { useInteractiveScene } from "visual/display/components/interactive-scene/useInteractiveScene";
import { useThreadWithPostProcessor } from "visual/display/hooks/use-thread";
import { useThreeJs } from "visual/display/hooks/use-three-js/useThreeJs";
import { NodeProps } from "../node.types";

const SceneNode = ({
  sceneFunctions,
  animations = [],
  interactionEvents = [],
  events,
  sceneData: { threeJs, lights, meshes, sceneComponents, sceneProperties },
}: NodeProps) => {
  const {
    container,
    renderer,
    camera,
    currentFrameRef,
    orbitControls,
  } = useThreeJs(threeJs);

  const scene = useInteractiveScene(
    sceneFunctions,
    events,
    animations,
    meshes,
    lights,
    sceneComponents,
    orbitControls,
    sceneProperties,
    interactionEvents
  );

  useThreadWithPostProcessor(currentFrameRef, scene, camera, renderer, []);

  return (
    <RootContainer containerRef={container} sceneProperties={sceneProperties} />
  );
};

export default SceneNode;
