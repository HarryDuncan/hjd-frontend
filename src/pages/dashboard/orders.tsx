import { DashboardLayout } from "layout/dashboard-layout/DashboardLayout";
import { OrdersContent } from "views/dashboard/orders/Orders";

export const Orders = () => {
  return (
    <DashboardLayout>
      <OrdersContent />
    </DashboardLayout>
  );
};
