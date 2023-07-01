import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";
import { ReactNode } from "react";

interface ViewItemProps {
  children: ReactNode;
}
export default function ViewCampaign({ children }: ViewItemProps) {
  return (
    <Layout>
      <ViewItemContainer>{children}</ViewItemContainer>
    </Layout>
  );
}
