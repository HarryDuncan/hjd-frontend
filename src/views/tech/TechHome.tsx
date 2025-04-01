import { SceneNode } from "art-os-package";
import { useSceneConfig } from "hooks/visual/useSceneConfig";

interface TechHomeProps {
  contentHeight: number;
}

export const TechHome = ({ contentHeight }: TechHomeProps) => {
  // const onScroll = useOnScrollEventConfig(contentHeight);

  const configId = "tech-home";
  const sceneConfig = useSceneConfig(configId);

  return sceneConfig ? <SceneNode sceneConfig={sceneConfig} /> : null;
};

// const useOnScrollEventConfig = (contentHeight: number) => {
//   const updateOnScroll = useCallback(
//     (scene: Scene, event: Event) => {
//       const { scrollY } = event as Event & { scrollY: number };
//       const scrollPercentage = scrollY / contentHeight;
//       updateSceneMeshesUniform(
//         scene as InteractiveScene,
//         "hjd-points",
//         "uScroll",
//         scrollPercentage * 30
//       );
//       const opacity = 1 - scrollPercentage * 2;
//       updateSceneMeshesUniform(
//         scene as InteractiveScene,
//         "hjd-chrome",
//         "uOpacity",
//         opacity
//       );
//     },
//     [contentHeight]
//   );

//   return useMemo(
//     () => ({
//       eventKey: "scroll",
//       eventFunction: updateOnScroll,
//     }),
//     [updateOnScroll]
//   );
// };
