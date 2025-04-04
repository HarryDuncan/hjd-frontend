import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { LineItem } from "models/shop/types";

export const resetInventory = async (cart: LineItem[]) => {
  const mutation = gql`
    mutation ResetInventory($cart: LineItem) {
      resetInventory(cart: $cart)
        @rest(
          type: "inventoryData"
          method: "POST"
          path: "/shop/products/inventory/reset"
          bodyKey: "cart"
        ) {
        isReset
      }
    }
  `;

  try {
    const response = await client.mutate({
      mutation,
      variables: {
        cart,
      },
    });
    const { data } = response;
    return { loading: false, data };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
