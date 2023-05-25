import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getIsServerRunning = async () => {
  const query = gql`
    query server {
      server @rest(type: "server", path: "/isActive") {
        isServerActive
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: { server },
      loading,
    } = response;
    return { server, loading };
  });
};
