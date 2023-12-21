import { ContentSubText } from "components/text/Text";
import { Product } from "models/shop/types";
import { ActionButton } from "components/buttons/action-button/ActionButton.styles";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const ProductControl = ({ productData }: { productData: Product }) => {
  const { stock, price } = productData;
  const { dispatch } = useShopContext();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: productData,
        quantity: 1,
      },
    });
  };

  return (
    <>
      {stock && price ? (
        <ActionButton onClick={handleAddToCart}>Add To Cart</ActionButton>
      ) : (
        <ContentSubText>Sold Out</ContentSubText>
      )}
    </>
  );
};
