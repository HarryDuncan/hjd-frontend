import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";

export default function Layout({
  topPadding = true,
  children,
}: {
  topPadding?: boolean;
  children: any;
}) {
  return (
    <>
      <DynamicNavigation />
      <PageContainer $topPadding={topPadding} className="page-container">
        {children}
        <Footer />
      </PageContainer>
    </>
  );
}
