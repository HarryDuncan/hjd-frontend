import { useCallback, useState } from "react";
import { StaticImage } from "../static-image";
import {
  MultiImageContainer,
  ThumbnailContainer,
  ThumbnailImage,
} from "./MultiImage.styles";

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
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(mainImageUrl);
  const handleChangeImage = useCallback((imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
  }, []);
  return (
    <MultiImageContainer>
      <StaticImage imageUrl={currentImageUrl} imageTitle={title} />
      <ThumbnailContainer>
        {multiImages.map((image, index) => (
          <ThumbnailImage
            alt={`${title} image-${{ index }}`}
            unoptimized
            src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}/${image}`}
            width={85}
            height={85}
            objectFit="contain"
            onClick={() => handleChangeImage(image)}
          />
        ))}
      </ThumbnailContainer>
    </MultiImageContainer>
  );
};
