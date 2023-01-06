import { PageContainer } from "components/styled-components/Containers";

const ExhibitionLayout = ({ children }: { children: any }) => (
  <>
    <PageContainer $topPadding={false} className="page-container">
      {children}
    </PageContainer>
  </>
);

export default ExhibitionLayout;
