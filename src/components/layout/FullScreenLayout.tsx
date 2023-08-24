import { DynamicInvisibleNavigation } from "components/navigation/invisible-navigation/DynamicInvisibleNavigation";
import { PageContainer } from "components/styled-components/Containers";
import { ReactNode } from "react";

export default function FullScreenLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageContainer
      $topPadding={false}
      $overflow="hidden"
      className="page-container"
    >
      <DynamicInvisibleNavigation />
      {children}
    </PageContainer>
  );
}
