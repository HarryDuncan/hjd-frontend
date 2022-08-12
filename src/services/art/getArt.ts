import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
export const getArt = async () => {
  const query = gql`
    query art {
      art @rest(type: "art", path: "/art") {
        paintings
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const art = response.data.art;
    const loading = response.loading;
    return { art, loading };
  });
};
