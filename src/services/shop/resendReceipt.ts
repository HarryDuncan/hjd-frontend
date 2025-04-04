import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { ReceiptData } from "views/shop/checkout/checkout.types";

export const resendReceipt = async (
  orderId: number,
  receiptData: ReceiptData
) => {
  const mutation = gql`
    mutation SendReceipt($orderId: Int!, $receiptData: ReceiptData!) {
      sendReceipt(orderId: $orderId, receiptData: $receiptData)
        @rest(
          type: "sendReceiptResponse"
          method: "POST"
          path: "/shop/resend-receipt"
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
        orderId,
        receiptData,
      },
    });
    const { data } = response;
    return { loading: false, data: data.sendReceipt as { orderId: number } };
  } catch (error) {
    console.error("Error resending receipt:", error);
    return { data: null, loading: false, error };
  }
};
