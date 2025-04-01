import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { LineItem } from "views/shop/shop-context/shop.context";

export const checkInventory = async (cart: LineItem[]) => {
  const mutation = gql`
    mutation CheckInventory($cart: LineItem) {
      checkInventory(cart: $cart)
        @rest(
          type: "inventoryData"
          method: "POST"
          path: "/shop/products/inventory/update"
          bodyKey: "cart"
        ) {
        products
        productVariations
        hasInventory
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
    const {
      data: { checkInventory: inventoryData },
    } = response;
    return { inventoryData, loading: false };
  } catch (error) {
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
