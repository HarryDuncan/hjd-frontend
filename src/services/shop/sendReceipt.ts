import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const sendReceipt = async (receiptData) => {
  const mutation = gql`
    mutation SendReceipt( $receiptData) {
      sendReceipt(receiptData : $receiptData)
        @rest(
          type: "sendReceiptResponse"
          method: "POST"
          path: "/shop/receipt"
          bodyKey: "emailData"
        ) {
        isReset
      }
    }
  `;
  try {
    const response = await client.mutate({
      mutation,
      variables: {
        receiptData,
      },
    });
    const { data } = response;
    console.log(response);
    return { loading: false };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
