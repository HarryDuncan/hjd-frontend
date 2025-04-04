import { SceneData, SceneNode } from "art-os-package";
import { useSceneConfig } from "hooks/visual/useSceneConfig";

export const DefaultScene = () => {
  const configId = "default-scene";
  const sceneConfig = useSceneConfig(configId);
  if (!sceneConfig) return null;

  return (
    <SceneNode
      sceneConfig={sceneConfig as unknown as SceneData}
      events={[]}
      interactionEvents={[]}
    />
  );
};
