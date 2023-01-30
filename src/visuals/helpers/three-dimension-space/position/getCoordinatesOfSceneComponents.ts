import { SceneComponentConfig } from "visuals/components/interactive-scene/types";

export const getCoordinatesOfSceneComponents = (
  sceneComponents: SceneComponentConfig[]
) =>
  sceneComponents.flatMap(({ componentProps }) => {
    const { position } = componentProps;
    return position ?? [];
  });
