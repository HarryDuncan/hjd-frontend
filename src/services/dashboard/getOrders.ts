import { gql } from "@apollo/client";
import { client } from "network/ApolloClient";

export const getOrders = async () => {
  const query = gql`
    query orders {
      orders @rest(type: "Orders", path: "/dashboard/orders") {
        orders
      }
    }
  `;
  return client.query({ query }).then((response) => {
    const {
      data: {
        orders: { orders },
      },
      loading,
    } = response;
    return { orders, loading };
  });
};
