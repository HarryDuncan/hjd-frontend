import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getLinkTree = async () => {
  const query = gql`
    query linkTree {
      links @rest(type: "link", path: "/content/link-tree") {
        links
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: {
        links: { links },
      },
      loading,
    } = response;
    return { links, loading };
  });
};
