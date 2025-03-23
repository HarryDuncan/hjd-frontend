import { ContentSubText, ContentText } from "components/text/Text";
import { Product, ProductVariation } from "models/shop/types";
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

export const ProductControl = ({ productData }: { productData: Product }) => {
  const {
    shopData: { productVariations },
  } = useShopData();
  const formattedProduct = useProductsWithVariations(
    [productData],
    productVariations
  )[0];
  const { stock, price, hasVariations, variations } = formattedProduct;
  const { dispatch } = useShopContext();
  const handleRouting = useHandleRouting("/checkout");
  const buttonRef = useRef<HTMLElement | null>(null);

  const handleAddToCart = useCallback(() => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: productData,
        quantity: 1,
      },
    });
    handleRouting();
  }, [dispatch, productData, handleRouting]);

  return (
    <ProductControlContainer>
      <ProductControlContent
        hasVariations={hasVariations}
        variations={variations}
        buttonRef={buttonRef}
        stock={stock}
        price={price}
        handleAddToCart={handleAddToCart}
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
}: {
  hasVariations: boolean;
  variations: ProductVariation[] | null;
  buttonRef: React.MutableRefObject<HTMLElement | null>;
  stock: number;
  price: number | null;
  handleAddToCart: () => void;
}) => {
  const onVariationAddToCart = (variationId: string) => {
    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: { product: variation, quantity: 1 },
    // });
    // handleRouting();    {/* hasEditions && <EditionsControl onAddToCart={handleAddToCart} />}
  };

  if (hasVariations && variations) {
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
