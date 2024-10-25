import { useLoadedImageDimensions } from "../hooks/useLoadedImageDimensions";
import { imageLoader } from "../images.functions";
import { ThumbnailImage, ThumbnailImageContainer } from "./MultiImage.styles";

interface ThumbnailImageProps {
  isSelected: boolean;
  alt: string;
  url: string;
  onClick: (imageIndex: number) => void;
  imageIndex?: number;
}
export const Thumbnail = ({
  isSelected,
  alt,
  url,
  onClick,
  imageIndex = 0,
}: ThumbnailImageProps) => {
  const { onImageLoadingComplete } = useLoadedImageDimensions();

  return (
    <ThumbnailImageContainer>
      <ThumbnailImage
        alt={alt}
        unoptimized
        $isSelected={isSelected}
        src={url}
        layout="fill"
        loader={imageLoader}
        objectFit="contain"
        onLoadingComplete={onImageLoadingComplete}
        onClick={() => onClick(imageIndex)}
      />
    </ThumbnailImageContainer>
  );
};
