import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useParams } from "hooks/routing/useParams";
import { useCallback } from "react";
import { useShopData } from "./useShopData";
import { moveThroughArray } from "utils/moveThroughArray";

export const useScrollProducts = () => {
  const { products } = useShopData();

  const handleRouting = useHandleRouting("");
  const currentProductId = useParams("productId");
  const currentIndex = products.findIndex(
    ({ id }) => id === Number(currentProductId)
  );
  return useCallback(
    (step: string) => {
      const { newIndex } = moveThroughArray(products, currentIndex, step);
      handleRouting(products[newIndex].id);
    },
    [products, currentIndex, handleRouting]
  );
};
