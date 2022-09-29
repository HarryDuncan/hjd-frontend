import { ImageHover } from "../image-hover";
import { ImageContainer } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
}
export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
}: ParallaxImageProps) => {
  return (
    <ImageContainer>
      <ImageHover imageUrl={imageUrl} title={imageTitle} />
    </ImageContainer>
  );
};
