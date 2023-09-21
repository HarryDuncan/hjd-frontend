import { TechSectionContainer } from "../tech.styles";
import { ScrollCardGallery } from "components/animations/scroll/scroll-card-gallery/ScrollCardGallery";
import { CARD_ANIMATION_TYPE } from "components/animations/scroll/scroll-card-gallery/scrollCardGallery.consts";
import {
  WINDOW_TYPE,
  useClientWindowSize,
} from "hooks/client-hooks/useClientWindowSize";
import { useMemo } from "react";
import { TechSectionInfo } from "./TechSectionInfo";
import {
  CardAnimationType,
  ScrollGalleryConfig,
} from "components/animations/scroll/scroll-card-gallery/scrollCardGallery.types";

interface TechSectionProps {
  sectionTitle: string;
  sectionText: string;
  techCardItems: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
  index: number;
  sectionData: { start: number; end: number };
  loadData: boolean;
}

export const TechSection = ({
  sectionTitle,
  sectionText,
  techCardItems,
  index,
  sectionData,
  loadData,
}: TechSectionProps) => {
  const scrollCardConfig = useScrollCardConfig(index);
  const isAnimated = false;
  return (
    <TechSectionContainer>
      {loadData && (
        <>
          <ScrollCardGallery items={techCardItems} config={scrollCardConfig} />

          <TechSectionInfo
            sectionTitle={sectionTitle}
            sectionText={sectionText}
            sectionData={sectionData}
            index={index}
            isAnimated={isAnimated}
          />
        </>
      )}
    </TechSectionContainer>
  );
};

const useScrollCardConfig = (index: number): Partial<ScrollGalleryConfig> => {
  const windowScreenType = useClientWindowSize();
  return useMemo(() => {
    const cardAnimationType = (
      index % 2 === 0
        ? CARD_ANIMATION_TYPE.WAVE_LEFT
        : CARD_ANIMATION_TYPE.WAVE_RIGHT
    ) as CardAnimationType;
    const config = getScrollConfig(windowScreenType);
    const gridWrapTransform = getGridWrapTransform(
      windowScreenType,
      cardAnimationType
    );
    return { ...config, gridWrapTransform, cardAnimationType };
  }, [windowScreenType]);
};

const getScrollConfig = (screenType: string) => {
  switch (screenType) {
    case WINDOW_TYPE.MOBILE:
      return {
        gridGap: "1rem",
        gridColumns: 2,
        gridWidth: "100%",
      };
    case WINDOW_TYPE.TABLET:
    default:
      return {};
  }
};

const getGridWrapTransform = (
  screenType: string,
  cardAnimationType: string
) => {
  switch (cardAnimationType) {
    case CARD_ANIMATION_TYPE.WAVE_LEFT:
      if (screenType === WINDOW_TYPE.MOBILE) {
        return {
          transformOrigin: "0% 20%",
          rotationY: 10,
          xPercent: -5,
          yPercent: 20,
        };
      }
      return {
        transformOrigin: "0% 20%",
        rotationY: 30,
        xPercent: -45,
      };
    case CARD_ANIMATION_TYPE.WAVE_RIGHT:
      if (screenType === WINDOW_TYPE.MOBILE) {
        return {
          transformOrigin: "0% 20%",
          rotationY: 10,
          xPercent: -5,
          yPercent: 20,
        };
      }
      return {
        transformOrigin: "0% 50%",
        rotationY: -30,
        xPercent: 65,
      };

    case CARD_ANIMATION_TYPE.NONE:
      return {};
  }
};
