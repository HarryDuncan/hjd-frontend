import { useMemo } from "react";
import { InteractiveThreeScene as InteractiveScene } from "visuals/components/interactive-scene/InteractiveScene";
import { SceneObject } from "visuals/components/interactive-scene/types";
import { getBoundInteractions } from "visuals/helpers/interactions/getBoundInteractions";
import {
  Binding,
  InteractionEventObject,
} from "../../helpers/interactions/types";

export const useInteractiveScene = (
  interactions: InteractionEventObject[],
  sceneFunctions,
  sceneParams = {},
  sceneObjects: SceneObject[] = [],
  isSceneDataInitialized = false
) =>
  useMemo(() => {
    const boundInteractions = getBoundInteractions(
      interactions,
      Binding.InteractiveScene
    );
    if (!isSceneDataInitialized) return null;
    console.log("ttt");
    console.log(sceneObjects);
    return new InteractiveScene(
      boundInteractions,
      sceneFunctions,
      sceneParams,
      sceneObjects
    );
  }, [isSceneDataInitialized]);
