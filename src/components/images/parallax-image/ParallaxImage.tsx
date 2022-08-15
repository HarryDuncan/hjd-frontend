import { MainTitle } from "components/styled-components/Text";
import { ImageHover } from "../image-hover";
import { ImageContainer, StyledImage } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  mainTitle: string;
}
export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  mainTitle = "Original Paintings",
}) => {
  return (
    <ImageContainer>
      <ImageHover imageUrl={imageUrl} title={imageTitle} />
      <MainTitle $isDark={false}>{mainTitle}</MainTitle>
    </ImageContainer>
  );
};
