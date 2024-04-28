import { DashboardLayout } from "layout/dashboard-layout/DashboardLayout";
import { OrdersContent } from "views/dashboard/orders/Orders";

const ShopDashboard = () => {
  return (
    <DashboardLayout>
      <OrdersContent />
    </DashboardLayout>
  );
};

export default ShopDashboard;
