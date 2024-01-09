import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { CartItem } from "views/shop/shop-context/shop.context";

export const resetInventory = async (cart: CartItem[]) => {
  const mutation = gql`
    mutation ResetInventory($cart: CartItem) {
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
    console.log(response);
    return { loading: false };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
