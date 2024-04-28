import { FloatingCentralContainer } from "components/containers/Containers";
import { useGetOrders } from "../useGetOrders";
import { OrderTable } from "../dashboard.styles";
import { MainTitle } from "components/text/Text";
import { OrderTableRow } from "./OrderTableRow";

export const OrdersContent = () => {
  const { orders } = useGetOrders();
  return (
    <FloatingCentralContainer>
      <MainTitle>Orders</MainTitle>
      <OrderTable>
        {orders.map((order) => (
          <OrderTableRow key={order.id} {...order} />
        ))}
      </OrderTable>
    </FloatingCentralContainer>
  );
};
