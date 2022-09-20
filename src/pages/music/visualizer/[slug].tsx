import Layout from "components/layout/DefaultLayout";
import { DynamicVisualizer } from "components/music-visualizer/DynamicVisualizer";
import { useGetMix } from "hooks/mixes/useGetMix";

const Slug = () => {
  const { mix } = useGetMix();
  if (!mix) return null;
  return (
    <Layout topPadding={false}>
      <DynamicVisualizer mix={mix} />
    </Layout>
  );
};

export default Slug;
