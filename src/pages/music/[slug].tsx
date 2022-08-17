import Layout from "components/layout/DefaultLayout";
import { useGetMix } from "hooks/mixes/useGetMix";

const Slug = () => {
  const { mix } = useGetMix();
  if (!mix) return null;
  return (
    <Layout>
      <h1>adsa</h1>
    </Layout>
  );
};

export default Slug;
