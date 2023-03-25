import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText } from "components/styled-components/Text";
import { TextScroller } from "components/text-scroller/TextScroller";
// import { DynamicInteractiveScene } from "components/visual-components/DynamicInteractiveScene";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { ImageContent, TextContent } from "models/content/content.types";

import { BioContentContainer, TextContainer } from "./Bio.styles";

interface BioSectionProps {
  image: ImageContent;
  text: TextContent;
  bioLetters?: any;
  index: number;
}
export const BioSection = ({
  image,
  text,
  bioLetters,
  index,
}: BioSectionProps) => {
  return (
    <InnerContainer $topOffset={0}>
      <ParallaxImage
        hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
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
