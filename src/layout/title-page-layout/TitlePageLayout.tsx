import { DynamicInvisibleNavigation } from "components/navigation/invisible-navigation/DynamicInvisibleNavigation";
import { PageContainer } from "components/containers/Containers";
import { ReactNode } from "react";
import { PageTitle } from "./PageTitle";

export default function TitlePageLayout({
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
      <PageTitle />
      {children}
    </PageContainer>
  );
}
