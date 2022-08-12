import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getShopData = async () => {
  const query = gql`
    query content {
      shopData @rest(type: "shopData", path: "/store") {
        products
        productVariations
        shippingZones
        shippingOptions
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const shopData = response.data.shopData;
    const loading = response.loading;
    return { shopData, loading };
  });
};
