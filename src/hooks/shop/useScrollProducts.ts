import { useHandleRouting } from "hooks/useHandleRouting";
import { useParams } from "hooks/useParams";
import { useCallback } from "react";
import {
  Direction,
  moveThroughArray,
} from "../../../utils/helpers/moveThroughArray";
import { useShopData } from "./useShopData";

export const useScrollProducts = () => {
  const {
    shopData: { products },
  } = useShopData();

  const handleRouting = useHandleRouting("");
  const currentProductId = useParams("productId");
  const currentIndex = products.findIndex(
    ({ id }) => id === Number(currentProductId)
  );
  return useCallback(
    (step: Direction) => {
      const { newIndex } = moveThroughArray(products, currentIndex, step);
      handleRouting(products[newIndex].id);
    },
    [products, currentIndex, handleRouting]
  );
};
