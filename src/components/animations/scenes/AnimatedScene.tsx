"use client";

import { SceneNode } from "art-os-package";
import { AnimatedSVG } from "components/loading/animated-svg/AnimatedSvg";
import { useSceneConfig } from "hooks/visual/useSceneConfig";

interface AnimatedSceneProps {
  configId: string;
}
export const AnimatedScene = ({ configId }: AnimatedSceneProps) => {
  const sceneConfig = useSceneConfig(configId);
  if (!sceneConfig) return null;

  return (
    <SceneNode
      sceneConfig={sceneConfig}
      events={[]}
      interactionEvents={[]}
      loaderComponent={<AnimatedSVG />}
    />
  );
};
