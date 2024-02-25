import { PageContainer } from "components/containers/Containers";
import { ReactNode } from "react";
import { PageTitle } from "./PageTitle";

export default function TitlePageLayout({ children }: { children: ReactNode }) {
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
