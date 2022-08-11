import { client } from "network/ApolloClient";
import { fetchData } from "../../network/rest/api";
import { ApiMethods } from "../../network/rest/apiConstants";
import { gql } from "@apollo/client";

export const getContent = async () => {
  const query = gql`
    query content {
      content @rest(type: "content", path: "/fetch/content") {
        textContent
        imageContent
      }
    }
  `;
  return client.query({ query }).then((response) => {
    return response.data.content;
  });
};
