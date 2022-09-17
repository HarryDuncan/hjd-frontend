import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getLinkTree = async () => {
  const query = gql`
    query linkTree {
      linkTree @rest(type: "link", path: "/link-tree") {
        links
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: {
        linkTree: { links },
      },
      loading,
    } = response;
    return { links, loading };
  });
};
