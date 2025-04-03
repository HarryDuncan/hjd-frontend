import { ContentSubText, ContentText } from "components/text/Text";
import { LineItem, Product, ProductVariation } from "models/shop/types";
import { useCallback, useRef } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";
import {
  ColumnContainer,
  ProductControlContainer,
} from "../ShopGallery.styles";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useProductsWithVariations } from "views/shop/hooks/useProductsWithVariations";
import { useShopData } from "views/shop/hooks/useShopData";
import { VariationsControl } from "./VariationsControl";

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
  const handleRouting = useHandleRouting("/checkout");
  const buttonRef = useRef<HTMLElement | null>(null);

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
    handleRouting();
  }, [dispatch, productData, handleRouting]);

  const onVariationAddToCart = (variationId: string) => {
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
    handleRouting();
    // {/* hasEditions && <EditionsControl onAddToCart={handleAddToCart} />}
  };
  return (
    <ProductControlContainer>
      <ProductControlContent
        hasVariations={hasVariations}
        variations={variations}
        buttonRef={buttonRef}
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
  buttonRef,
  stock = 0,
  price = 0,
  handleAddToCart,
  onVariationAddToCart,
}: {
  hasVariations: boolean;
  variations: ProductVariation[] | null;
  buttonRef: React.MutableRefObject<HTMLElement | null>;
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
        buttonRef={buttonRef}
      />
    );
  }
  if (stock && price && !hasVariations) {
    return (
      <ColumnContainer>
        <ContentText>AUD ${price}</ContentText>
        <ContentText>{stock} left</ContentText>
        <CircleActionButton
          ref={buttonRef}
          onClick={handleAddToCart}
          title="Add To Cart"
          circleFill="#030303"
        />
      </ColumnContainer>
    );
  }
  return (
    <ColumnContainer>
      <ContentSubText>Sold Out</ContentSubText>
    </ColumnContainer>
  );
};
