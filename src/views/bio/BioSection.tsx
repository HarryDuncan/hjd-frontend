import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/containers/Containers";
import { ImageContent, TextContent } from "models/content/content.types";
import { BioContentContainer } from "./Bio.styles";
import { BIO_BANNER_CONFIG } from "views/bio/bio.constants";
import useDeviceSize from "hooks/client-hooks/useDeviceSize";
import { ScrollTypography } from "components/animations/scroll/scroll-typography/ScrollTypography";
import {
  CHAR_ANIMATIONS,
  TEXT_TYPE,
} from "components/animations/scroll/scroll-typography/scrollTypography.consts";
import { useMemo } from "react";
import { ScrollTypographyConfig } from "components/animations/scroll/scroll-typography/scrollTypography.types";

interface BioSectionProps {
  image: ImageContent;
  text: TextContent;
  index: number;
}

const SCROLL_TYPOGRAPHY_CONFIG = {
  animationType: CHAR_ANIMATIONS.MULTI_FLASH,
};
export const BioSection = ({ image, text, index }: BioSectionProps) => {
  const { height, bannerConfig } = useBannerSize();
  const scrollConfig = useScrollConfig(index);

  return (
    <InnerContainer $topOffset={0}>
      <ParallaxImage
        hoverImageConfig={bannerConfig}
        imageTitle="bio-header"
        imageUrl={image.imageUrl ?? ""}
        imageHeightPx={height}
      />

      <BioContentContainer $index={index}>
        <ScrollTypography text={text.title} />
        <ScrollTypography
          text={text.content}
          textType={TEXT_TYPE.TEXT}
          config={scrollConfig}
        />
      </BioContentContainer>
    </InnerContainer>
  );
};

const useBannerSize = () => {
  const { height } = useDeviceSize();
  return useMemo(() => {
    const bannerConfig = BIO_BANNER_CONFIG;
    bannerConfig.default.heightPx = height;
    bannerConfig.final.heightPx = height;
    return { height, bannerConfig };
  }, [height]);
};

const useScrollConfig = (index: number): ScrollTypographyConfig =>
  useMemo(() => {
    const scrollConfig = { ...SCROLL_TYPOGRAPHY_CONFIG };
    if (index === 0) {
      scrollConfig.animationType = CHAR_ANIMATIONS.NONE;
    }
    return scrollConfig as ScrollTypographyConfig;
  }, [index]);
