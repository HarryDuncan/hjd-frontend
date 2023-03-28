import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";

export default function Layout({
  topPadding = true,
}: {
  topPadding?: boolean;
  children: any;
}) {
  return (
    <>
      <DynamicNavigation />
      <PageContainer $topPadding={topPadding} className="page-container">
        <h1>Ooops looks like there is an error</h1>
        <Footer />
      </PageContainer>
    </>
  );
}
