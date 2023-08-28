import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getPaintings = async () => {
  const query = gql`
    query paintings {
      paintings @rest(type: "Paintings", path: "/art/paintings") {
        paintings
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: { paintings },
      loading,
    } = response;
    return { paintings, loading };
  });
};
