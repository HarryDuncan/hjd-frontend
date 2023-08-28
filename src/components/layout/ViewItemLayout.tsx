import { StaticImage } from "components/images";
import { ViewItemContainer } from "components/styled-components/Containers";
import Layout from "./DefaultLayout";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import { Direction } from "../../../utils/helpers/moveThroughArray";

interface ViewItemProps {
  title: string;
  imageUrl: string;
  onScroll: (direction: Direction) => void;
  children: ReactNode;
}
export default function ViewItem({
  imageUrl,
  title,
  onScroll,
  children,
}: ViewItemProps) {
  return (
    <Layout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onScroll}>
        <ViewItemContainer>
          <StaticImage imageUrl={imageUrl} imageTitle={title} />
          {children}
        </ViewItemContainer>
      </SwipeablePageNavigator>
    </Layout>
  );
}
