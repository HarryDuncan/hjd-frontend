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
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${imageUrl}`}
        fill={true}
      />
    </ImageContainer>
  );
};
