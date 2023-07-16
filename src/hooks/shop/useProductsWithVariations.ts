import { Product, ProductVariations } from "models/shop/types";
import { useMemo } from "react";

export const useProductsWithVariations = (
  products: Product[],
  productVariations: ProductVariations[]
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
    return productsWithVariations;
  }, [products, productVariations]);
