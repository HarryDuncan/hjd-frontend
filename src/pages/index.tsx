import { DynamicAnimationWidget } from "components/animation-widget/DynamicAnimationWidget";
import Layout from "components/layout/DefaultLayout";
import { PageContainer } from "components/styled-components/Containers";
import { AssetTypes } from "models/visuals/types";
import type { NextPage } from "next";

const scenes = [
  {
    name: "ArtLavaLamp",
    data: {
      assets: [
        {
          name: "texture1",
          url: "/images/textures/cube/img-1/",
          assetType: AssetTypes.texture,
        },
        {
          name: "texture2",
          url: "/images/textures/cube/img-12/",
          assetType: AssetTypes.texture,
        },
      ],
    },
  },
  {
    name: "SpinningBlocks",
    data: {
      assets: [
        {
          name: "mainMesh",
          url: "../assets/models/blocks.glb",
          assetType: AssetTypes.geometry,
        },
      ],
    },
  },
];
const Home: NextPage = () => (
  <Layout topPadding={false}>
    <DynamicAnimationWidget scenes={scenes} />
  </Layout>
);

export default Home;
