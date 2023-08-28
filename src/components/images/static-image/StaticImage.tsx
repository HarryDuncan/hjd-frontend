import { LoadingSvg } from "components/loading/loading-svg/LoadingSvg";
import { ImageContainer, StyledImage } from "./StaticImage.styles";
import { useState } from "react";

interface StaticImageProps {
  imageUrl: string;
  imageTitle: string;
}
export const StaticImage = ({
  imageUrl = "",
  imageTitle = "img",
}: StaticImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  return (
    <ImageContainer>
      {!isImageLoaded && <LoadingSvg />}
      <StyledImage
        alt={imageTitle}
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${imageUrl}`}
        fill
        onLoadingComplete={() => {
          setIsImageLoaded(true);
        }}
      />
    </ImageContainer>
  );
};
