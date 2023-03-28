import Layout from "components/layout/DefaultLayout";
import { DynamicInteractiveScene } from "components/visual-components/DynamicInteractiveScene";
import type { NextPage } from "next";
import { deepMergeObjects } from "utils";
import { useDefaultConfig } from "visual-configs/default/useDefaultConfig";
import { homeScene } from "visual-configs/homeSceneMarching";
import { InteractiveSceneParams } from "visual/visual-components/interactive-scene/interactiveScene.types";

const Home: NextPage = () => {
  const homeScene = useHomeSceneData();
  return (
    <Layout topPadding={false}>
      <DynamicInteractiveScene {...homeScene} />
    </Layout>
  );
};

const useHomeSceneData = () => {
  const { threeJsParams, events } = useDefaultConfig();

  const sceneParams = homeScene() as unknown as InteractiveSceneParams;
  return {
    events,
    ...sceneParams,
    threeJsParams: deepMergeObjects(
      threeJsParams,
      sceneParams.threeJsParams ?? {}
    ),
  };
};

export default Home;
