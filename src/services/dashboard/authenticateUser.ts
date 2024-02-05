import { gql } from "@apollo/client";
import { AuthenticationData } from "models/dashboard/dashboard.types";
import { client } from "network/ApolloClient";

export const authenticateUser = async (
  authenticationData: AuthenticationData
) => {
  const mutation = gql`
    mutation AuthenticateUser($authenticationData: AuthenticationData) {
      authenticateUser(authenticationData: $authenticationData)
        @rest(
          type: "authenticateUserResponse"
          method: "POST"
          path: "/dashboard/authenticate"
          bodyKey: "authenticationData"
        ) {
        message
        success
      }
    }
  `;
  try {
    const response = await client.mutate({
      mutation,
      variables: {
        authenticationData,
      },
    });
    const {
      data: {
        authenticateUser: { success },
      },
    } = response;
    console.log(response);
    return { loading: false, success };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { loading: false, error, success: false };
  }
};
