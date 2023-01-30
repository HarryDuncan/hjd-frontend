import Layout from "components/layout/DefaultLayout";
import type { NextPage } from "next";
import { DynamicInteractiveScene } from "visuals/interactive-scene/DynamicInteractiveScene";
import { InteractiveSceneParams } from "visuals/interactive-scene/interactiveScene.types";
import { homeScene } from "visuals/visual-configs/home-scene/homeScene";

const Home: NextPage = () => (
  <Layout topPadding={false}>
    <DynamicInteractiveScene parameters={homeScene as InteractiveSceneParams} />
  </Layout>
);

export default Home;
