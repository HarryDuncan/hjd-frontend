import { DynamicAnimationWidget } from "components/animation-widget/DynamicAnimationWidget";
import Layout from "components/layout/DefaultLayout";
import { LinkTree } from "components/link-tree/LinkTree";
import { useLinkTree } from "hooks/useLinkTree";
import { AssetTypes } from "models/visuals/types";
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
  // {
  //   name: "SpinningBlocks",
  //   data: {
  //     assets: [
  //       {
  //         name: "mainMesh",
  //         url: "../images/textures/cube/img-12/",
  //         assetType: AssetTypes.geometry,
  //       },
  //     ],
  //   },
  // },
];
const Link = () => {
  const { links } = useLinkTree();

  return (
    <Layout topPadding={false}>
      <LinkTree links={links} />
      <DynamicAnimationWidget scenes={scenes} />
    </Layout>
  );
};

export default Link;
