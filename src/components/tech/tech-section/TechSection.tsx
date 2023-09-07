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
}

export const TechSection = ({
  sectionTitle,
  sectionText,
  techCardItems,
  index,
  sectionData,
}: TechSectionProps) => {
  const scrollType =
    index % 2 === 0
      ? CARD_ANIMATION_TYPE.WAVE_LEFT
      : CARD_ANIMATION_TYPE.WAVE_RIGHT;

  const scrollCardConfig = useScrollCardConfig();
  return (
    <TechSectionContainer>
      <ScrollCardGallery
        items={techCardItems}
        scrollType={scrollType as CardAnimationType}
        config={scrollCardConfig}
      />
      <TechSectionInfo
        sectionTitle={sectionTitle}
        sectionText={sectionText}
        sectionData={sectionData}
        index={index}
      />
    </TechSectionContainer>
  );
};

const useScrollCardConfig = (): Partial<ScrollGalleryConfig> => {
  const windowScreenType = useClientWindowSize();
  return useMemo(() => {
    switch (windowScreenType) {
      case WINDOW_TYPE.MOBILE:
        return {
          gridGap: "4rem",
          gridColumns: 2,
          gridWidth: "100%",
        };
      case WINDOW_TYPE.TABLET:
      default:
        return {};
    }
  }, [windowScreenType]);
};
