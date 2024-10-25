import { ContentSubText, ContentText } from "components/text/Text";
import { Product } from "models/shop/types";
import { useCallback, useRef } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";
import {
  ColumnContainer,
  ProductControlContainer,
} from "../ShopGallery.styles";
import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";

export const ProductControl = ({ productData }: { productData: Product }) => {
  const { stock, price } = productData;
  const { dispatch } = useShopContext();
  const buttonRef = useRef<HTMLElement | null>(null);
  const handleAddToCart = useCallback(() => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: productData,
        quantity: 1,
      },
    });
  }, [dispatch, productData]);

  return (
    <ProductControlContainer>
      {stock && price ? (
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
      ) : (
        <ContentSubText>Sold Out</ContentSubText>
      )}
    </ProductControlContainer>
  );
};
