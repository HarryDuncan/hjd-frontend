import FullScreenLayout from "components/layout/FullScreenLayout";
import { LinkTree } from "components/link-tree/LinkTree";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useLinkTree } from "hooks/useLinkTree";
import { useSceneConfigAndAssets } from "hooks/useSceneConfigAndAssets";
import { useMemo } from "react";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { CustomAnimationConfig } from "visual/display/animation/animation.types";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
import { SceneData } from "visual/display/components/interactive-scene/types";
import { useSceneData } from "visual/set-up/config/useSceneData";

const Link = () => {
  const { links } = useLinkTree();
  return (
    <FullScreenLayout>
      <LinkTree links={links} />
      <LinkTreeContent />
    </FullScreenLayout>
  );
};

const LinkTreeContent = () => {
  const configId = "link-tree";
  const { areAssetsInitialized, initializedAssets, configData } =
    useSceneConfigAndAssets(configId);
  const sceneData = useSceneData(
    configData,
    initializedAssets,
    areAssetsInitialized
  );
  const sceneParameters = useMemo(() => {
    if (!configData) return null;
    const { animationConfig } = configData;
    return {
      sceneFunctions: {
        onTimeUpdate: (scene: InteractiveScene) => {
          startSceneElementAnimations(scene);
        },
      },
      interactionEvents: [],
      sceneData,
      animations: animationConfig as CustomAnimationConfig[],
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData as SceneData} />
  ) : null;
};

export default Link;
