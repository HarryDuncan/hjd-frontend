import { ImageContainer, StyledImage } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  title: string;
}
export const ParallaxImage = ({ imageUrl = "", title = "img" }) => {
  return (
    <ImageContainer>
      <StyledImage alt={title} />
    </ImageContainer>
  );
};
