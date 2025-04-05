import { ImageContainer, StyledImage } from "./StaticImage.styles";
import { useLoadedImageDimensions } from "../hooks/useLoadedImageDimensions";
import { ImageDimensions } from "../images.types";
import { imageLoader } from "../images.functions";
import { ImageLoading } from "components/loading/animated-svg/ImageLoader";

interface StaticImageProps {
  imageUrl: string | null | undefined;
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
  if (!imageUrl) return null;
  return (
    <ImageContainer
      $height={imageDimensions?.height}
      $width={imageDimensions?.width}
    >
      {!isImageLoaded && <ImageLoading />}
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
