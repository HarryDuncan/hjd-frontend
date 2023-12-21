import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";
import { CartItem } from "views/shop/shop-context/shop.context";

export const checkInventory = async (cartData: CartItem[]) => {
  const mutation = gql`
    mutation CheckInventory($cartData: YourCartInputType) {
      checkInventory(cartData: $cartData)
        @rest(type: "inventoryData", path: "/shop/products/inventory") {
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
        cartData,
      },
    });
    const {
      data: { checkInventory: inventoryData },
    } = response;
    return { inventoryData, loading: false };
  } catch (error) {
    // Handle error
    console.error("Error checking inventory:", error);
    return { inventoryData: null, loading: false, error };
  }
};
