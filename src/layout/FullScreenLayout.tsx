import { DynamicInvisibleNavigation } from "components/navigation/invisible-navigation/DynamicInvisibleNavigation";
import { PageContainer } from "components/containers/Containers";
import { ReactNode } from "react";

export default function FullScreenLayout({
  children,
  showNav = true,
}: {
  children: ReactNode;
  showNav?: boolean;
}) {
  return (
    <PageContainer
      $topPadding={false}
      $overflow="hidden"
      className="page-container"
    >
      {showNav && <DynamicInvisibleNavigation />}
      {children}
    </PageContainer>
  );
}
