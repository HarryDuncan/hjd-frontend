import { StaticImage } from "components/images";
import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import { Direction } from "../../../utils/helpers/moveThroughArray";

interface ViewItemProps {
  title: string;
  imageUrl: string;
  onChangeItem: (direction: Direction) => void;
  children: ReactNode;
}
export default function ViewItem({
  imageUrl,
  title,
  onChangeItem,
  children,
}: ViewItemProps) {
  return (
    <Layout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ViewItemContainer>
          <StaticImage imageUrl={imageUrl} imageTitle={title} />
          {children}
        </ViewItemContainer>
      </SwipeablePageNavigator>
    </Layout>
  );
}
