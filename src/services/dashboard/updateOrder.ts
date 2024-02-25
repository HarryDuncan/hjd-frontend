import { gql } from "@apollo/client";
import { OrderUpdateData } from "models/dashboard/dashboard.types";
import { client } from "network/ApolloClient";

export const updateOrder = async (orderUpdateData: OrderUpdateData) => {
  const mutation = gql`
    mutation UpdateOrder($orderUpdateData: OrderUpdateData) {
      updateOrder(orderUpdateData: $orderUpdateData)
        @rest(
          type: "orderUpdateResponse"
          method: "POST"
          path: "/dashboard/update-order"
          bodyKey: "orderUpdateData"
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
        orderUpdateData,
      },
    });
    const { data } = response;
    // console.log(response);
    return { loading: false, success: true, data };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { loading: false, error, success: false };
  }
};
