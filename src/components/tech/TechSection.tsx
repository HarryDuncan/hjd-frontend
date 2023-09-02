import { ScrollCardGallery } from "components/animations/scroll-card-gallery/ScrollCardGallery";
import { CARD_GALLERY_TYPE } from "components/animations/scroll-card-gallery/scrollCardGallery.consts";
import { TechInfoContainer, TechSectionContainer } from "./tech.styles";
import { ScrollTypography } from "components/animations/scroll-typography/ScrollTypography";
import {
  CHAR_ANIMATIONS,
  TEXT_TYPE,
} from "components/animations/scroll-typography/scrollTypography.consts";
const SCROLL_TYPOGRAPHY_CONFIG = {
  animationType: CHAR_ANIMATIONS.MULTI_FLASH,
};
interface TechSectionProps {
  section: string;
  sectionTitle: string;
  sectionText: string;
  techCardItems: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
  index: number;
  sectionData;
}
export const TechSection = ({
  section,
  sectionTitle,
  sectionText,
  techCardItems,
  index,
  sectionData,
}: TechSectionProps) => {
  const scrollConfig = { ...SCROLL_TYPOGRAPHY_CONFIG };
  const scrollType =
    index % 2 === 0
      ? CARD_GALLERY_TYPE.WAVE_LEFT
      : CARD_GALLERY_TYPE.WAVE_RIGHT;

  const isLeft = index % 2 === 0;
  return (
    <TechSectionContainer>
      <ScrollCardGallery items={techCardItems} scrollType={scrollType} />
      <TechInfoContainer $top={sectionData.start} $isLeft={isLeft}>
        <ScrollTypography text={sectionTitle} />
        <ScrollTypography
          text={sectionText}
          textType={TEXT_TYPE.TEXT}
          config={scrollConfig}
        />
      </TechInfoContainer>
    </TechSectionContainer>
  );
};
