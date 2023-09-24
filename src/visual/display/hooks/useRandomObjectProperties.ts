import { useMemo } from "react";
import { positionToArray } from "visual/utils/conversion/conversion";
import { getRandomCoordinates } from "visual/utils/randomize/getRandomCoordinates";
import { Bounds3D } from "visual/utils/three-dimension-space/position/position.types";

export const useRandomObjectProperties = (
  numberOfObjects: number,
  bounds: Bounds3D
) => {
  return useMemo(() => {
    const coords = getRandomCoordinates(numberOfObjects, bounds);
    const rotation = getRandomCoordinates(numberOfObjects, bounds);
    const randomObjects: { position: number[]; rotation: number[] }[] = [];
    for (let i = 0; i < numberOfObjects; i += 1) {
      randomObjects.push({
        position: positionToArray(coords[i]),
        rotation: positionToArray(rotation[i]),
      });
    }
    return randomObjects;
  }, [numberOfObjects, bounds]);
};
