import { ImageContainer, StyledImage } from "./StaticImage.styles";

interface StaticImageProps {
  imageUrl: string;
  imageTitle: string;
}
export const StaticImage = ({
  imageUrl = "",
  imageTitle = "img",
}: StaticImageProps) => {
  return (
    <ImageContainer>
      <StyledImage
        alt={imageTitle}
        src={imageUrl}
        layout="fill"
        objectFit="contain"
      />
    </ImageContainer>
  );
};
