import { ActionButton } from "components/buttons/action-button/ActionButton";
import { ContentSubText } from "components/text/Text";
import { Product } from "models/shop/types";
import { useCallback } from "react";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { ProductControlContainer } from "../ShopGallery.styles";

export const ProductControl = ({ productData }: { productData: Product }) => {
  const { stock, price } = productData;
  const { dispatch } = useShopContext();

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
        <ActionButton onClick={handleAddToCart} title="Add To Cart" />
      ) : (
        <ContentSubText>Sold Out</ContentSubText>
      )}
    </ProductControlContainer>
  );
};
