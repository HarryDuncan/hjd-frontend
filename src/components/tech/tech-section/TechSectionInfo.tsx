import { ScrollTypography } from "components/animations/scroll/scroll-typography/ScrollTypography";
import {
  CHAR_ANIMATIONS,
  TEXT_TYPE,
} from "components/animations/scroll/scroll-typography/scrollTypography.consts";
import { TechInfoContainer } from "../tech.styles";
import { ScrollTypographyConfig } from "components/animations/scroll/scroll-typography/scrollTypography.types";
import {
  useClientWindowSize,
  WINDOW_TYPE,
} from "hooks/client-hooks/useClientWindowSize";
import { useMemo } from "react";
import { SCROLL_TRIGGER_SECTIONS } from "components/animations/scroll/scroll.consts";

interface TechSectionInfoProps {
  sectionTitle: string;
  sectionText: string;
  sectionData: { start: number; end: number };
  index: number;
}

export const TechSectionInfo = ({
  sectionTitle,
  sectionText,
  sectionData,
  index,
}: TechSectionInfoProps) => {
  const isLeft = index % 2 === 0;
  const scrollConfig = useScrollTypographyConfig();

  return (
    <TechInfoContainer $top={sectionData.start} $isLeft={isLeft}>
      <ScrollTypography text={sectionTitle} />
      <ScrollTypography
        text={sectionText}
        textType={TEXT_TYPE.TEXT}
        config={scrollConfig}
      />
    </TechInfoContainer>
  );
};

const useScrollTypographyConfig = (): ScrollTypographyConfig => {
  const windowScreenType = useClientWindowSize();
  return useMemo(() => {
    const DEFAULT_CONFIG = {
      animationType: CHAR_ANIMATIONS.MULTI_FLASH,
      startTrigger: {
        targetSection: SCROLL_TRIGGER_SECTIONS.CENTER,
        screenSection: SCROLL_TRIGGER_SECTIONS.BOTTOM,
        percentage: 10,
      },
      endTrigger: {
        targetSection: SCROLL_TRIGGER_SECTIONS.CENTER,
        screenSection: SCROLL_TRIGGER_SECTIONS.CENTER,
        percentage: 10,
      },
    };
    switch (windowScreenType) {
      case WINDOW_TYPE.MOBILE:
        return { ...DEFAULT_CONFIG };
      case WINDOW_TYPE.TABLET:
      default:
        return { ...DEFAULT_CONFIG };
    }
  }, [windowScreenType]) as ScrollTypographyConfig;
};