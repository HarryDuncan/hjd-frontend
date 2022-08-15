import Layout from "components/layout/DefaultLayout";
import { MainTitle } from "components/styled-components/Text";
import { useGetCampaign } from "hooks/campaigns/useGetCampaign";

const Slug = () => {
  const { campaign } = useGetCampaign();
  if (!campaign) return null;
  return (
    <Layout>
      <MainTitle $isDark={true}>{campaign.title}</MainTitle>
    </Layout>
  );
};

export default Slug;
