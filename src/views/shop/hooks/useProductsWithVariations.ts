import { Product, ProductVariation } from "models/shop/types";
import { useMemo } from "react";

export const useProductsWithVariations = (
  products: Product[],
  productVariations: ProductVariation[]
) =>
  useMemo(() => {
    const productsWithVariations = products.map((product) => {
      const variations = product.hasVariations
        ? productVariations.filter(
            (variation) => variation.productId === product.id
          )
        : null;
      const isSoldOut = !product.hasVariations
        ? !product.stock
        : variations?.every((variation) => variation.stock === 0);
      return { ...product, variations, isSoldOut };
    });
    return productsWithVariations.sort((a, b) => {
      if (a.isSoldOut && !b.isSoldOut) return 1; // a is sold out, b is not
      if (!a.isSoldOut && b.isSoldOut) return -1; // b is sold out, a is not
      return 0; // both are either sold out or not
    });
  }, [products, productVariations]);
