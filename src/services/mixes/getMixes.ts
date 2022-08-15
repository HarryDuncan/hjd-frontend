import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getMixes = async () => {
  const query = gql`
    query mixes {
      mixes @rest(type: "mix", path: "/music") {
        mixes
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const mixes = response.data.mixes.mixes;
    const loading = response.loading;
    return { mixes, loading };
  });
};
