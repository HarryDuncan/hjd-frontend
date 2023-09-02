import { useMemo } from "react";
import { useInteractionsWithScene } from "./useInteractionsWithScene";
import {
  InteractiveScene,
  InteractiveSceneFunctions,
  SceneInteraction,
} from "./InteractiveScene";
import { EventConfig } from "interaction/interactions.types";
import { CustomAnimationConfig } from "visual/display/animation/animation.types";
import { Object3D } from "three";
import { SceneLight } from "visual/display/scene-elements/lights/lights.types";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const useInteractiveScene = (
  interactionEvents: SceneInteraction[],
  sceneFunction: InteractiveSceneFunctions,
  eventConfig: EventConfig[] = [],
  animationConfig: CustomAnimationConfig[] = [],
  sceneElements: {
    meshes: Object3D[];
    lights: SceneLight[];
    sceneComponents: Object3D[];
    orbitControls: OrbitControls | null;
  }
) => {
  const addInteractions = useInteractionsWithScene(interactionEvents);
  return useMemo(() => {
    const scene = new InteractiveScene(
      sceneFunction,
      eventConfig,
      animationConfig
    );
    const { meshes, lights, sceneComponents, orbitControls } = sceneElements;
    meshes.forEach((mesh) => scene.add(mesh));
    lights.forEach((light) => scene.add(light));
    sceneComponents.forEach((component) => scene.add(component));
    scene.addOrbitControls(orbitControls);
    addInteractions(scene);

    return scene;
  }, [sceneFunction, eventConfig, addInteractions, sceneElements]);
};
