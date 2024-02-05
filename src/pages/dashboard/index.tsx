import FullScreenLayout from "layout/FullScreenLayout";
import { DashboardContent } from "views/dashboard/dashboard-content/DashboardContent";
import { useDashboardContext } from "views/dashboard/dashboard-context/dashboard.context";
import { useRedirectOnLoginLogout } from "views/dashboard/useRedirectOnLogout";

const Dashboard = () => {
  const {
    state: { isLoggedIn },
  } = useDashboardContext();
  useRedirectOnLoginLogout();
  if (!isLoggedIn) {
    return null;
  }
  return (
    <FullScreenLayout>
      <DashboardContent />
    </FullScreenLayout>
  );
};

export default Dashboard;
