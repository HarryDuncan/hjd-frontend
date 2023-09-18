import { StaticImage } from "components/images";
import { ViewItemContainer } from "components/containers/Containers";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import TransitionFriendlyLayout from "./Layout";
import { Direction } from "utils/moveThroughArray";

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
    <TransitionFriendlyLayout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ViewItemContainer>
          <StaticImage imageUrl={imageUrl} imageTitle={title} />
          {children}
        </ViewItemContainer>
      </SwipeablePageNavigator>
    </TransitionFriendlyLayout>
  );
}
