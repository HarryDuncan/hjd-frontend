import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getCampaigns = async () => {
  const query = gql`
    query campaignData {
      campaigns @rest(type: "campaign", path: "/campaigns") {
        campaigns
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: {
        campaigns: { campaigns },
      },
      loading,
    } = response;
    return { campaigns, loading };
  });
};
