import { ContentSubText, ContentText } from "components/text/Text";
import { LineItem, Product, ProductVariation } from "models/shop/types";
import { useCallback } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";
import {
  ColumnContainer,
  ProductControlContainer,
} from "../ShopGallery.styles";

import { useProductsWithVariations } from "views/shop/hooks/useProductsWithVariations";
import { useShopData } from "views/shop/hooks/useShopData";
import { VariationsControl } from "./VariationsControl";
import { SVGButton } from "components/buttons/SVGButton";

interface ProductControlProps {
  productData: Product;
}
export const ProductControl = ({ productData }: ProductControlProps) => {
  const { productVariations } = useShopData();
  const formattedProduct = useProductsWithVariations(
    [productData],
    productVariations
  )[0];
  const { stock, price, hasVariations, variations } = formattedProduct;
  const { dispatch } = useShopContext();

  const handleAddToCart = useCallback(() => {
    const newLineItem: LineItem = {
      guid: productData.guid,
      productId: productData.id,
      variationId: null,
      quantity: 1,
      title: productData.title,
      price: productData.price,
      imageUrl: productData.imageUrls[0],
      shippingOptionId: productData.shippingOptionId,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: newLineItem,
    });
  }, [dispatch, productData]);

  const onVariationAddToCart = useCallback(
    (variationId: string) => {
      const variation = variations?.find((v) => v.id === Number(variationId));
      const newLineItem: LineItem = {
        guid: variation?.guid || productData.guid,
        productId: productData.id,
        variationId: variation?.id || null,
        quantity: 1,
        title: `${productData.title} - ${variation?.title || ""}`,
        price: variation?.price || productData.price,
        imageUrl: productData.imageUrls[0],
        shippingOptionId:
          variation?.shippingOptionId || productData.shippingOptionId,
      };
      if (!variation) return;
      dispatch({
        type: "ADD_TO_CART",
        payload: newLineItem,
      });

      // {/* hasEditions && <EditionsControl onAddToCart={handleAddToCart} />}
    },
    [dispatch, productData, variations]
  );
  return (
    <ProductControlContainer>
      <ProductControlContent
        hasVariations={hasVariations}
        variations={variations}
        stock={stock}
        price={price}
        handleAddToCart={handleAddToCart}
        onVariationAddToCart={onVariationAddToCart}
      />
    </ProductControlContainer>
  );
};

const ProductControlContent = ({
  hasVariations,
  variations,
  stock = 0,
  price = 0,
  handleAddToCart,
  onVariationAddToCart,
}: {
  hasVariations: boolean;
  variations: ProductVariation[] | null;
  stock: number;
  price: number | null;
  handleAddToCart: () => void;
  onVariationAddToCart: (variationId: string) => void;
}) => {
  if (hasVariations && variations?.length) {
    return (
      <VariationsControl
        variations={variations}
        onAddToCart={onVariationAddToCart}
      />
    );
  }
  if (stock && price && !hasVariations) {
    return (
      <ColumnContainer>
        <ContentText>AUD ${price}</ContentText>
        <ContentText>{stock} left</ContentText>
        <SVGButton onClick={handleAddToCart} title="Add To Cart" />
      </ColumnContainer>
    );
  }
  return (
    <ColumnContainer>
      <ContentSubText>Sold Out</ContentSubText>
    </ColumnContainer>
  );
};
