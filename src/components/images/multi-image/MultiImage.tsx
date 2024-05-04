import { useCallback, useMemo, useState } from "react";
import { StaticImage } from "../static-image";
import { MultiImageContainer, ThumbnailContainer } from "./MultiImage.styles";
import { Thumbnail } from "./Thumbnail";
import { ImageDimensions } from "../images.types";

interface MultiImageProps {
  title: string;
  mainImageUrl: string;
  multiImages: string[];
}
export const MultiImage = ({
  title,
  mainImageUrl,
  multiImages,
}: MultiImageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const handleChangeImage = useCallback((imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  }, []);
  const images = useMemo(
    () => [mainImageUrl, ...multiImages.map((multiImage) => multiImage)],
    [mainImageUrl, multiImages]
  );

  const [imageDimension, setImageDimension] = useState<ImageDimensions>({
    width: 0,
    height: 0,
  });
  const onMainImageLoaded = (loadedImageDimensions: ImageDimensions) => {
    setImageDimension(loadedImageDimensions);
  };

  return (
    <MultiImageContainer>
      <StaticImage
        onImageLoaded={onMainImageLoaded}
        imageUrl={images[selectedImageIndex]}
        imageTitle={title}
      />
      <ThumbnailContainer
        $top={imageDimension.height}
        $left={imageDimension.width}
      >
        {images.map((image, index) => (
          <Thumbnail
            isSelected={index === selectedImageIndex}
            alt={`${title} image-${index}`}
            url={image}
            onClick={handleChangeImage}
            imageIndex={index}
          />
        ))}
      </ThumbnailContainer>
    </MultiImageContainer>
  );
};
