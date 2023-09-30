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
  const { scrollCardConfig, isAnimated } = useScrollCardConfig(index);
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

const useScrollCardConfig = (
  index: number
): { scrollCardConfig: Partial<ScrollGalleryConfig>; isAnimated: boolean } => {
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
    const scrollCardConfig = {
      ...config,
      gridWrapTransform,
      cardAnimationType,
    };
    const isAnimated = false;
    return { isAnimated, scrollCardConfig };
  }, [windowScreenType, index]);
};

const getScrollConfig = (screenType: string) => {
  switch (screenType) {
    case WINDOW_TYPE.TABLET:
    case WINDOW_TYPE.MOBILE:
      return {
        gridGap: "1rem",
        gridColumns: 2,
        gridWidth: "100%",
      };
    case WINDOW_TYPE.LAPTOP:
      return {
        gridGap: "1rem",
        gridColumns: 2,
        gridWidth: "50%",
      };

    default:
      return { gridGap: "3rem" };
  }
};
const SMALL_SCREEN = [
  WINDOW_TYPE.MOBILE,
  WINDOW_TYPE.SMALL_MOBILE,
  WINDOW_TYPE.LAPTOP,
  WINDOW_TYPE.TABLET,
];

const getGridWrapTransform = (
  screenType: string,
  cardAnimationType: string
) => {
  switch (cardAnimationType) {
    case CARD_ANIMATION_TYPE.WAVE_LEFT:
      if (SMALL_SCREEN.includes(screenType)) {
        return {
          transformOrigin: "0% 20%",
          rotationY: 10,
          xPercent: -10,
          yPercent: 20,
        };
      }
      return {
        transformOrigin: "0% 20%",
        rotationY: 30,
        xPercent: -65,
      };
    case CARD_ANIMATION_TYPE.WAVE_RIGHT:
      if (SMALL_SCREEN.includes(screenType)) {
        return {
          transformOrigin: "0% 20%",
          rotationY: 10,
          xPercent: -18,
          yPercent: 20,
        };
      }
      return {
        transformOrigin: "0% 50%",
        rotationY: -30,
        xPercent: 80,
      };
    case CARD_ANIMATION_TYPE.NONE:
    default:
      return {};
  }
};
