import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import {
  LayoutContainer,
  PageContainer,
} from "components/containers/Containers";
import { ReactNode } from "react";

export default function TransitionLayout({
  children,
  topPadding = true,
  isError = false,
  hasFooter = true,
}: {
  children: ReactNode;
  isError?: boolean;
  topPadding?: boolean;
  hasFooter?: boolean;
}) {
  return (
    <LayoutContainer>
      <DynamicNavigation />
      <PageContainer $topPadding={topPadding} className="page-container">
        {isError ?? <p>Oops we are having an issue with our servers</p>}
        {children}
        {hasFooter ?? <Footer />}
      </PageContainer>
    </LayoutContainer>
  );
}
