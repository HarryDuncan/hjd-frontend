import { ParallaxImage } from "components/images";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText } from "components/styled-components/Text";
import {
  TEXT_POSITIONS,
  TextScroller,
} from "components/text-scroller/TextScroller";
// import { DynamicInteractiveScene } from "components/visual-components/DynamicInteractiveScene";
import { ImageContent, TextContent } from "models/content/content.types";

import { BioContentContainer, TextContainer } from "./Bio.styles";
import { BIO_BANNER_CONFIG, BIO_BANNER_SIZE } from "constants/bio.constants";

interface BioSectionProps {
  image: ImageContent;
  text: TextContent;
  //  bioLetters?: any;
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
        imageHeightPx={BIO_BANNER_SIZE}
      >
        <TextScroller
          text={` ${text.title} `}
          textPosition={TEXT_POSITIONS.START}
        />
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
