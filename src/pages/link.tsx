import { useMemo } from "react";
import FullScreenLayout from "components/layout/FullScreenLayout";
import { LinkTree } from "views/link-tree/LinkTree";
import { DynamicScene } from "components/visual-components/DynamicInteractiveNode";
import { useLinkTree } from "hooks/content/useLinkTree";
import { useSceneConfigAndAssets } from "hooks/visual/useSceneConfigAndAssets";
import { startSceneElementAnimations } from "visual/display/animation/animation-manager/startSceneElementAnimations";
import { InteractiveScene } from "visual/display/components/interactive-scene/InteractiveScene";
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
      animations: animationConfig,
      events: [],
    };
  }, [configData, sceneData]);

  return sceneData !== null && sceneParameters !== null ? (
    <DynamicScene {...sceneParameters} sceneData={sceneData} />
  ) : null;
};

export default Link;
