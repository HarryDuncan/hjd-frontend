import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";

export default function Layout({
  children,
  topPadding = true,
  isError = false,
}: {
  children: any;
  isError?: boolean;
  topPadding?: boolean;
}) {
  return (
    <>
      <DynamicNavigation />
      <PageContainer $topPadding={topPadding} className="page-container">
        {isError ? (
          <>Oops we are having an issue with our servers</>
        ) : (
          <>{children}</>
        )}
        <Footer />
      </PageContainer>
    </>
  );
}
