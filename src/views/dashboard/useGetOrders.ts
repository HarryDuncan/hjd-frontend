import { NETWORK_STATUS_TYPES } from "constants/api.constants";
import { FetchOrderResponse } from "models/dashboard/dashboard.types";
import { useQuery } from "react-query";
import { getOrders } from "services/dashboard/getOrders";

export const useGetOrders = () => {
  const orderData = useQuery<FetchOrderResponse>(["order-items"], () =>
    getOrders()
  );
  return (
    orderData?.data ?? {
      orders: [],
      loading: true,
      isError: orderData.status === NETWORK_STATUS_TYPES.ERROR,
    }
  );
};
