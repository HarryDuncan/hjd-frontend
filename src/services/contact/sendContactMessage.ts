import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { ContactData } from "views/contact/contact.types";

export const sendContactMessage = async (contactData: ContactData) => {
  const mutation = gql`
    mutation SendMessage($contactData: ContactData) {
      sendMessage(contactData: $contactData)
        @rest(
          type: "sendMessageResponse"
          method: "POST"
          path: "/dashboard/contact"
          bodyKey: "contactData"
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
        contactData,
      },
    });
    const { data: sendMessage } = response;
    return { loading: false, data: sendMessage.sendMessage };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { data: null, loading: false, error };
  }
};
