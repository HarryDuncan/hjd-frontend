import { PageContainer } from "components/containers/Containers";
import { DashboardNavigation } from "components/navigation/dashboard-navigation/DashboardNavigaton";
import { ReactNode } from "react";
import { useDashboardContext } from "views/dashboard/dashboard-context/dashboard.context";

import { useRedirectOnLoginLogout } from "views/dashboard/useRedirectOnLogout";

interface DashboardLayoutProps {
  children: ReactNode;
}
export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const {
    state: { isLoggedIn },
  } = useDashboardContext();
  useRedirectOnLoginLogout();
  if (!isLoggedIn) {
    return null;
  }
  return (
    <PageContainer
      $topPadding={false}
      $overflow="hidden"
      className="page-container"
    >
      <DashboardNavigation />
      {children}
    </PageContainer>
  );
};
