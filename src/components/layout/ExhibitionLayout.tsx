import { PageContainer } from "components/styled-components/Containers";
import { ReactNode } from "react";

const ExhibitionLayout = ({ children }: { children: ReactNode }) => (
  <PageContainer $topPadding={false} className="page-container">
    {children}
  </PageContainer>
);

export default ExhibitionLayout;
