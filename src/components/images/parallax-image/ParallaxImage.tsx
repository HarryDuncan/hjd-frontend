import { MainTitle } from "components/styled-components/Text";
import { ImageHover } from "../image-hover";
import { ImageHoverConfig } from "../image-hover/ImageHover";
import { ParallaxImageContainer } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  hoverImageConfig: ImageHoverConfig;
  mainTitle?: string;
  imageHeightPx?: number;
}

export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  hoverImageConfig,
  mainTitle,
  imageHeightPx = 250,
}: ParallaxImageProps) => {
  return (
    <ParallaxImageContainer $height={imageHeightPx}>
      {mainTitle && <MainTitle $isLight={false}>{mainTitle}</MainTitle>}
      <ImageHover
        hoverImageConfig={hoverImageConfig}
        imageUrl={imageUrl}
        title={imageTitle}
      />
    </ParallaxImageContainer>
  );
};
