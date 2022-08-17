import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <DynamicNavigation />
      <PageContainer className="page-container">
        {children}
        <Footer />
      </PageContainer>
    </>
  );
}
