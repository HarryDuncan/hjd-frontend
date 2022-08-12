import { ImageContainer, StyledImage } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  title: string;
}
export const ParallaxImage = ({ imageUrl = "", title = "img" }) => {
  return (
    <ImageContainer>
      <StyledImage
        alt={title}
        src={"/images/art/8Bytes.jpg"}
        layout="fill"
        height={200}
      />
    </ImageContainer>
  );
};
