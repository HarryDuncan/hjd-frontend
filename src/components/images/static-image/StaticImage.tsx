import { LoadingSvg } from "components/loading/loading-svg/LoadingSvg";
import { ImageContainer, StyledImage } from "./StaticImage.styles";
import { useState } from "react";

interface StaticImageProps {
  imageUrl: string;
  imageTitle: string;
}

interface Dimensions {
  height: number;
  width: number;
}
export const StaticImage = ({
  imageUrl = "",
  imageTitle = "img",
}: StaticImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageDimensions, setImageDimensions] = useState<null | Dimensions>(
    null
  );
  const onLoadingComplete = (img: HTMLImageElement) => {
    const { height, width } = img;
    setImageDimensions({ height, width });
    setIsImageLoaded(true);
  };
  const imageLoader = ({ src }: { src: string }) => {
    return `${process.env.NEXT_PUBLIC_CONTENT_ROOT}${src}`;
  };

  return (
    <ImageContainer $height={imageDimensions?.height}>
      {!isImageLoaded && <LoadingSvg />}
      <StyledImage
        loader={imageLoader}
        alt={imageTitle}
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${imageUrl}`}
        fill
        unoptimized
        onLoadingComplete={onLoadingComplete}
      />
    </ImageContainer>
  );
};
