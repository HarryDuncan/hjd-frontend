import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useParams } from "hooks/routing/useParams";
import { useCallback } from "react";
import { useArtData } from "./useArtData";
import { Direction, moveThroughArray } from "utils/moveThroughArray";

export const useScrollArts = () => {
  const {
    paintings: { paintings },
  } = useArtData();

  const handleRouting = useHandleRouting("");
  const currentSlug = useParams("slug");

  const currentIndex = paintings.findIndex(({ slug }) => slug === currentSlug);
  return useCallback(
    (step: Direction) => {
      const { newIndex } = moveThroughArray(paintings, currentIndex, step);
      handleRouting(paintings[newIndex].slug);
    },
    [paintings, currentIndex, handleRouting]
  );
};
