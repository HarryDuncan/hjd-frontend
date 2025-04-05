"use client";

import { LinkTree } from "views/link-tree/LinkTree";
import { useLinkTree } from "hooks/content/useLinkTree";
import Head from "next/head";
import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import FullScreenLayout from "layout/FullScreenLayout";

const Link = () => {
  const { links } = useLinkTree();
  return (
    <>
      <Head>
        <title>Harry J Dee</title>
        <meta
          name="Harry J Dee"
          content="The online virtual headquarters of artist Harry J Dee"
          key="desc"
        />
      </Head>
      <FullScreenLayout>
        <LinkTree links={links} />
        <DynamicAnimatedScene configId="default-scene" />
      </FullScreenLayout>
    </>
  );
};

export default Link;
