import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getShopData = async () => {
  const query = gql`
    query content {
      shopData @rest(type: "shopData", path: "/shop/products") {
        products
        productVariations
        shippingZones
        shippingOptions
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      loading,
      data: { shopData },
    } = response;
    return { shopData, loading };
  });
};
