import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";
import { ReactNode } from "react";

export default function Layout({
  children,
  topPadding = true,
  isError = false,
}: {
  children: ReactNode;
  isError?: boolean;
  topPadding?: boolean;
}) {
  return (
    <>
      <DynamicNavigation />
      <PageContainer $topPadding={topPadding} className="page-container">
        {isError ?? <p>Oops we are having an issue with our servers</p>}
        {children}
        <Footer />
      </PageContainer>
    </>
  );
}
