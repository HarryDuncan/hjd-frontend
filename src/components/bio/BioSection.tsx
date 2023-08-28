import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { ImageContent, TextContent } from "models/content/content.types";
import { BioContentContainer } from "./Bio.styles";
import { BIO_BANNER_CONFIG } from "constants/bio.constants";
import useDeviceSize from "hooks/useDeviceSize";
import { ScrollTypography } from "components/animations/scroll-typography/ScrollTypography";
import { TEXT_TYPE } from "components/animations/scroll-typography/scrollTypeography.consts";

interface BioSectionProps {
  image: ImageContent;
  text: TextContent;
  index: number;
}
export const BioSection = ({ image, text, index }: BioSectionProps) => {
  const { height, bannerConfig } = useBannerSize();
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
        <ScrollTypography text={text.content} textType={TEXT_TYPE.TEXT} />
      </BioContentContainer>
    </InnerContainer>
  );
};

const useBannerSize = () => {
  const { height } = useDeviceSize();
  const bannerConfig = BIO_BANNER_CONFIG;
  bannerConfig.default.heightPx = height;
  bannerConfig.final.heightPx = height;
  return { height, bannerConfig };
};
