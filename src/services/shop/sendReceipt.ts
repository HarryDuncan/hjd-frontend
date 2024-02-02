import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { ReceiptData } from "views/shop/checkout/checkout.types";

export const sendReceipt = async (receiptData: ReceiptData) => {
  const mutation = gql`
    mutation SendReceipt($receiptData: ReceiptData) {
      sendReceipt(receiptData: $receiptData)
        @rest(
          type: "sendReceiptResponse"
          method: "POST"
          path: "/shop/receipt"
          bodyKey: "receiptData"
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
    // console.log(response);
    return { loading: false, data };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
