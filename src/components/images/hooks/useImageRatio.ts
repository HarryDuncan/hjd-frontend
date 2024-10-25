import { useMemo } from "react";
import { ImageDimensions } from "../images.types";

const EMPTY_RATIO = [0, 0];
export const useImageRatio = (
  imageDimensions: ImageDimensions | null,
  antecedent = "height"
) =>
  useMemo(() => {
    if (imageDimensions) {
      const { height, width } = imageDimensions;
      if (height !== 0 && width !== 0) {
        if (antecedent === "height") {
          return [1, width / height];
        }
        return [height / width, 1];
      }
    }
    return EMPTY_RATIO;
  }, [imageDimensions]);
