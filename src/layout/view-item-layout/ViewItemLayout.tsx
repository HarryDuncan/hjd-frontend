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
  imageUrl: string;
  onChangeItem: (direction: Direction) => void;
  handleExit: () => void;
  children: ReactNode;
  multiImage?: string[] | null;
}
export default function ViewItem({
  imageUrl,
  title,
  onChangeItem,
  handleExit,
  children,
  multiImage,
}: ViewItemProps) {
  return (
    <DefaultLayout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ViewItemContainer>
          {multiImage ? (
            <MultiImage
              mainImageUrl={imageUrl}
              title={title}
              multiImages={multiImage}
            />
          ) : (
            <StaticImage imageUrl={imageUrl} imageTitle={title} />
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
