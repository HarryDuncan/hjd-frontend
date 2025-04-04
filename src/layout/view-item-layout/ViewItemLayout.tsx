import { StaticImage } from "components/images";
import {
  ViewItemContainer,
  ViewItemContent,
  ViewItemDetails,
} from "components/containers/Containers";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import { Direction } from "utils/moveThroughArray";
import { MainTitle } from "components/text/Text";
import DefaultLayout from "layout/DefaultLayout";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { MultiImage } from "components/images/multi-image/MultiImage";

interface ViewItemProps {
  title: string;
  onChangeItem: (direction: Direction) => void;
  handleExit: () => void;
  children: ReactNode;
  imageUrls?: string[] | null;
}
export default function ViewItem({
  title,
  onChangeItem,
  handleExit,
  children,
  imageUrls,
}: ViewItemProps) {
  return (
    <DefaultLayout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ViewItemContainer>
          {imageUrls && imageUrls.length > 1 ? (
            <MultiImage title={title} imageUrls={imageUrls} />
          ) : (
            <StaticImage imageUrl={imageUrls?.[0]} imageTitle={title} />
          )}

          <ViewItemContent>
            <IconButton onClick={handleExit} type={IconTypes.EXIT} hasGesture />
            <IconButton
              onClick={onChangeItem}
              type={IconTypes.CHEVRON_LEFT}
              hasGesture
            />
            <IconButton
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
