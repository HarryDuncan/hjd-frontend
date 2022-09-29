import { useHandleRouting } from "hooks/useHandleRouting";
import { useParams } from "hooks/useParams";
import { useCallback } from "react";
import {
  Direction,
  moveThroughArray,
} from "../../../utils/helpers/moveThroughArray";
import { useArtData } from "./useArtData";

export const useScrollPaintings = () => {
  const {
    art: { paintings },
  } = useArtData();

  const handleRouting = useHandleRouting("");
  const currentSlug = useParams("slug");
  const currentIndex = paintings.findIndex(({ slug }) => slug === currentSlug);
  return useCallback(
    (step: Direction) => {
      const { newIndex } = moveThroughArray(paintings, currentIndex, step);
      handleRouting(paintings[newIndex].slug);
    },
    [currentSlug, paintings]
  );
};
