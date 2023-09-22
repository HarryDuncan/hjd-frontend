import FullScreenLayout from "components/layout/FullScreenLayout";
import { LinkTree } from "views/link-tree/LinkTree";
import { useLinkTree } from "hooks/content/useLinkTree";
import Head from "next/head";
import { DefaultScene } from "components/animations/scenes/DefaultScene";

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
        <DefaultScene />
      </FullScreenLayout>
    </>
  );
};

export default Link;
