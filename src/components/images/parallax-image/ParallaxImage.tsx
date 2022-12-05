import { MainTitle } from "components/styled-components/Text";
import { ImageHover } from "../image-hover";
import { ImageHoverConfig } from "../image-hover/ImageHover";
import { ImageContainer } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  hoverImageConfig: ImageHoverConfig;
  mainTitle?: string;
}

export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  hoverImageConfig,
  mainTitle,
}: ParallaxImageProps) => {
  return (
    <ImageContainer>
      {mainTitle && <MainTitle $isLight={false}>{mainTitle}</MainTitle>}
      <ImageHover
        hoverImageConfig={hoverImageConfig}
        imageUrl={imageUrl}
        title={imageTitle}
      />
    </ImageContainer>
  );
};
