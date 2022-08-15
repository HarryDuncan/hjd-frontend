import { StaticImage } from "components/images";
import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";

interface ViewItemProps {
  title: string;
  imageUrl: string;
  children: any;
}
export default function ViewItem({ imageUrl, title, children }: ViewItemProps) {
  return (
    <Layout>
      <ViewItemContainer>
        <StaticImage imageUrl={imageUrl} imageTitle={title} />
        {children}
      </ViewItemContainer>
    </Layout>
  );
}
