import Layout from "components/layout/DefaultLayout";
import { LinkTree } from "components/link-tree/LinkTree";
import { useLinkTree } from "hooks/useLinkTree";

const Link = () => {
  const { links } = useLinkTree();

  return (
    <Layout>
      <LinkTree links={links} />
    </Layout>
  );
};

export default Link;
