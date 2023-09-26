import { StaticImage } from "components/images";
import {
  ViewItemContainer,
  ViewItemContent,
  ViewItemDetails,
} from "components/containers/Containers";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import { Direction } from "utils/moveThroughArray";
import { Icon } from "components/icons/Icons";
import { IconTypes } from "components/icons/Icons.types";
import { MainTitle } from "components/text/Text";
import DefaultLayout from "layout/DefaultLayout";

interface ViewItemProps {
  title: string;
  imageUrl: string;
  onChangeItem: (direction: Direction) => void;
  handleExit: () => void;
  children: ReactNode;
}
export default function ViewItem({
  imageUrl,
  title,
  onChangeItem,
  handleExit,
  children,
}: ViewItemProps) {
  return (
    <DefaultLayout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ViewItemContainer>
          <StaticImage imageUrl={imageUrl} imageTitle={title} />
          <ViewItemContent>
            <Icon onClick={handleExit} type={IconTypes.EXIT} hasGesture />
            <Icon
              onClick={onChangeItem}
              type={IconTypes.CHEVRON_LEFT}
              hasGesture
            />
            <Icon
              onClick={onChangeItem}
              type={IconTypes.CHEVRON_RIGHT}
              hasGesture
            />
            <MainTitle $isLight={false}>{title}</MainTitle>
            <ViewItemDetails>{children}</ViewItemDetails>
          </ViewItemContent>
        </ViewItemContainer>
      </SwipeablePageNavigator>
    </DefaultLayout>
  );
}
