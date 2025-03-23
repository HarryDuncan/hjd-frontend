import { useCallback, useMemo, useState } from "react";
import { StaticImage } from "../static-image";
import { MultiImageContainer, ThumbnailContainer } from "./MultiImage.styles";
import { Thumbnail } from "./Thumbnail";
import { ImageDimensions } from "../images.types";

interface MultiImageProps {
  title: string;
  imageUrls: string[];
}
export const MultiImage = ({ title, imageUrls }: MultiImageProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const handleChangeImage = useCallback((imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  }, []);
  const images = useMemo(
    () => [imageUrls[0], ...imageUrls.map((imageUrl) => imageUrl)],
    [imageUrls]
  );

  const [imageDimension, setImageDimension] = useState<ImageDimensions>({
    width: 0,
    height: 0,
  });
  const onMainImageLoaded = (loadedImageDimensions: ImageDimensions) => {
    setImageDimension(loadedImageDimensions);
  };

  console.log(images);

  if (!images.length) {
    return null;
  }

  return (
    <MultiImageContainer>
      <StaticImage
        onImageLoaded={onMainImageLoaded}
        imageUrl={images[selectedImageIndex]}
        imageTitle={title}
      />
      {images.length > 1 ? (
        <ThumbnailContainer
          $top={imageDimension.height}
          $left={imageDimension.width}
        >
          {images.map((image, index) => (
            <Thumbnail
              key={`${title}-image-${image}`}
              isSelected={index === selectedImageIndex}
              alt={`${title} image-${index}`}
              url={image}
              onClick={handleChangeImage}
              imageIndex={index}
            />
          ))}
        </ThumbnailContainer>
      ) : null}
    </MultiImageContainer>
  );
};
