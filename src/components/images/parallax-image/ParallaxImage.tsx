import { MainTitle } from "components/styled-components/Text";
import { ImageHover } from "../image-hover";
import { ImageHoverConfig } from "../image-hover/ImageHover";
import { ImageContainer } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  hoverImageConfig: ImageHoverConfig;
}

export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  hoverImageConfig,
}: ParallaxImageProps) => {
  return (
    <ImageContainer>
      <MainTitle $isDark={false}>
        Original, Exclusive and Premium Goods
      </MainTitle>
      <ImageHover
        hoverImageConfig={hoverImageConfig}
        imageUrl={imageUrl}
        title={imageTitle}
      />
    </ImageContainer>
  );
};
