import { LoadingSvg } from "components/loading/loading-svg/LoadingSvg";
import { ImageContainer, StyledImage } from "./StaticImage.styles";
import { useLoadedImageDimensions } from "../hooks/useLoadedImageDimensions";
import { ImageDimensions } from "../images.types";
import { imageLoader } from "../images.functions";

interface StaticImageProps {
  imageUrl: string;
  imageTitle: string;
  onImageLoaded?: (imageDimensions: ImageDimensions) => void;
}

export const StaticImage = ({
  imageUrl = "",
  imageTitle = "img",
  onImageLoaded,
}: StaticImageProps) => {
  const { onImageLoadingComplete, imageDimensions, isImageLoaded } =
    useLoadedImageDimensions(onImageLoaded);

  return (
    <ImageContainer
      $height={imageDimensions?.height}
      $width={imageDimensions?.width}
    >
      {!isImageLoaded && <LoadingSvg />}
      <StyledImage
        loader={imageLoader}
        alt={imageTitle}
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${imageUrl}`}
        fill
        unoptimized
        onLoadingComplete={onImageLoadingComplete}
      />
    </ImageContainer>
  );
};
