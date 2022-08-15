import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getCampaigns = async () => {
  const query = gql`
    query campaigns {
      campaigns @rest(type: "campaign", path: "/campaigns") {
        campaigns
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const campaigns = response.data.campaigns.campaigns;
    const loading = response.loading;
    return { campaigns, loading };
  });
};
