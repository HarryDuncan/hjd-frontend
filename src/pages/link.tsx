"use client";

import { LinkTree } from "views/link-tree/LinkTree";
import { useLinkTree } from "hooks/content/useLinkTree";
import Head from "next/head";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import TitlePageLayout from "layout/title-page-layout/TitlePageLayout";

const HOME_SCENE_ID = "home-scene";
const Link = () => {
  const { links } = useLinkTree();
  return (
    <>
      <Head>
        <title>Harry J Dee Link Tree</title>
        <meta
          name="Link Tree"
          content="The online virtual link tree of artist Harry J Dee"
          key="desc"
        />
      </Head>
      <TitlePageLayout>
        <LinkTree links={links} />
        <DynamicAnimatedScene configId={HOME_SCENE_ID} />
      </TitlePageLayout>
    </>
  );
};

export default Link;
