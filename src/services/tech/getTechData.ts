import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getTechData = async () => {
  const query = gql`
    query content {
      techData @rest(type: "techData", path: "/tech/content") {
        tech
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      loading,
      data: { techData },
    } = response;
    return { techData, loading };
  });
};
