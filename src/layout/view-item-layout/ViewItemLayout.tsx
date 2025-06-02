import { ParallaxImage, StaticImage } from "components/images";
import {
  DesktopIconContainer,
  ViewItemContainer,
  ViewItemContent,
  ViewItemDetails,
} from "components/containers/Containers";
import { ReactNode } from "react";
import SwipeablePageNavigator from "components/mobile/SwipeableNavigator";
import { MainTitle } from "components/text/Text";
import DefaultLayout from "layout/DefaultLayout";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { MultiImage } from "components/images/multi-image/MultiImage";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import { SHOP_IMAGES } from "constants/shop.constants";
import { TextScroller } from "components/text-scroller/TextScroller";
import { ItemDetails } from "views/shop/checkout/checkout-container/checkout.styles";
import MobileNavigator from "./MobileNavigator";

interface ViewItemProps {
  title: string;
  onChangeItem: (direction: string) => void;
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
  const { images } = useContentForPage({ imageSelection: SHOP_IMAGES });
  return (
    <DefaultLayout hasFooter={false}>
      <SwipeablePageNavigator onSwipe={onChangeItem}>
        <ParallaxImage
          hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
          imageTitle="shop-header"
          imageUrl={images[0]?.imageUrl ?? ""}
          imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
        >
          <TextScroller text={` ${title} `} />
        </ParallaxImage>
        <ViewItemContainer>
          <DesktopIconContainer>
            <IconButton
              onClick={onChangeItem}
              type={IconTypes.CHEVRON_LEFT}
              hasGesture
            />
          </DesktopIconContainer>
          {imageUrls && imageUrls.length > 1 ? (
            <MultiImage title={title} imageUrls={imageUrls} />
          ) : (
            <StaticImage imageUrl={imageUrls?.[0]} imageTitle={title} />
          )}

          <ViewItemContent>
            <ItemDetails>
              <MainTitle $isLight={false}>{title}</MainTitle>
              <ViewItemDetails>{children}</ViewItemDetails>
            </ItemDetails>
          </ViewItemContent>
          <DesktopIconContainer>
            <IconButton onClick={handleExit} type={IconTypes.EXIT} hasGesture />
            <IconButton
              onClick={onChangeItem}
              type={IconTypes.CHEVRON_RIGHT}
              hasGesture
            />
          </DesktopIconContainer>
        </ViewItemContainer>
        <MobileNavigator handleExit={handleExit} onChangeItem={onChangeItem} />
      </SwipeablePageNavigator>
    </DefaultLayout>
  );
}
