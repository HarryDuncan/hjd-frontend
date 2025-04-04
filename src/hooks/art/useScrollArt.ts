import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useParams } from "hooks/routing/useParams";
import { useCallback } from "react";
import { useArtData } from "./useArtData";
import { Direction, moveThroughArray } from "utils/moveThroughArray";

export const useScrollArt = () => {
  const { art } = useArtData();

  const handleRouting = useHandleRouting("");
  const currentSlug = useParams("slug");

  const currentIndex = art.findIndex(({ slug }) => slug === currentSlug);
  return useCallback(
    (step: Direction) => {
      const { newIndex } = moveThroughArray(art, currentIndex, step);
      handleRouting(art[newIndex].slug);
    },
    [art, currentIndex, handleRouting]
  );
};
