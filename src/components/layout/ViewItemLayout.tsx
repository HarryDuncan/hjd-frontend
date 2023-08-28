import { StaticImage } from "components/images";
import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";
import { ReactNode } from "react";

interface ViewItemProps {
  title: string;
  imageUrl: string;
  children: ReactNode;
}
export default function ViewItem({ imageUrl, title, children }: ViewItemProps) {
  return (
    <Layout hasFooter={false}>
      <ViewItemContainer>
        <StaticImage imageUrl={imageUrl} imageTitle={title} />
        {children}
      </ViewItemContainer>
    </Layout>
  );
}
