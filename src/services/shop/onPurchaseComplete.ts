import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { ReceiptData } from "views/shop/checkout/checkout.types";

export const onPurchaseComplete = async (receiptData: ReceiptData) => {
  const mutation = gql`
    mutation SendReceipt($receiptData: ReceiptData!) {
      sendReceipt(receiptData: $receiptData)
        @rest(
          type: "postPurchaseCompleteResponse"
          method: "POST"
          path: "/shop/purchase-complete"
          bodyKey: "receiptData"
        ) {
        orderId
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
    return { loading: false, data: data.sendReceipt as { orderId: number } };
  } catch (error) {
    console.error("Error handling post purchase completion:", error);
    return { data: null, loading: false, error };
  }
};
