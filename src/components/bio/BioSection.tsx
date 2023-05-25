import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText } from "components/styled-components/Text";
import { TextScroller } from "components/text-scroller/TextScroller";
// import { DynamicInteractiveScene } from "components/visual-components/DynamicInteractiveScene";
import { MAIN_GALLERY_TOP_OFFSET } from "constants/ui.constants";
import { ImageContent, TextContent } from "models/content/content.types";

import { BioContentContainer, TextContainer } from "./Bio.styles";
import { BIO_BANNER_CONFIG } from "constants/bio.constants";

interface BioSectionProps {
  image: ImageContent;
  text: TextContent;
  bioLetters?: any;
  index: number;
}
export const BioSection = ({
  image,
  text,

  index,
}: BioSectionProps) => {
  return (
    <InnerContainer $topOffset={0}>
      <ParallaxImage
        hoverImageConfig={BIO_BANNER_CONFIG}
        imageTitle="bio-header"
        imageUrl={image.imageUrl ?? ""}
        imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
      >
        <TextScroller text={` ${text.title} `} />
      </ParallaxImage>
      <BioContentContainer $index={index}>
        <TextContainer>
          <ContentText>{text.content}</ContentText>
        </TextContainer>
      </BioContentContainer>
    </InnerContainer>
  );
};

// <DynamicInteractiveScene {...bioLetters} />
