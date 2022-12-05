import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";

interface ViewItemProps {
  children: any;
}
export default function ViewCampaign({ children }: ViewItemProps) {
  return (
    <Layout>
      <ViewItemContainer>{children}</ViewItemContainer>
    </Layout>
  );
}
