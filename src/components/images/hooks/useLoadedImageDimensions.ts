import { useCallback, useState } from "react";
import { ImageDimensions } from "../images.types";

export const useLoadedImageDimensions = (
  onImageLoadedCallback?: (imageDimensions: ImageDimensions) => void | undefined
) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [imageDimensions, setImageDimensions] =
    useState<null | ImageDimensions>(null);

  const onImageLoadingComplete = useCallback(
    (img: HTMLImageElement) => {
      const { height, width } = img;
      if (onImageLoadedCallback) {
        onImageLoadedCallback({ height, width });
      }
      setImageDimensions({ height, width });
      setIsImageLoaded(true);
    },
    [onImageLoadedCallback, setImageDimensions, setIsImageLoaded]
  );

  return { onImageLoadingComplete, imageDimensions, isImageLoaded };
};
