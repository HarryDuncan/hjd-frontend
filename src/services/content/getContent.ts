import { client } from "network/ApolloClient";
import { gql } from "@apollo/client";

export const getContent = async () => {
  const query = gql`
    query content {
      content @rest(type: "content", path: "/content/site-content") {
        textContent
        imageContent
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: {
        content: { imageContent, textContent },
      },
    } = response;
    return { imageContent, textContent };
  });
};
