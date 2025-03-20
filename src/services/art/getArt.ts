import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getArt = async () => {
  const query = gql`
    query art {
      art @rest(type: "Art", path: "/art/art") {
        art
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: { art },
      loading,
    } = response;

    return { art: art.art, loading };
  });
};
