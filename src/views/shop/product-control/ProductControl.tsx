import { ContentSubText } from "components/text/Text";
import { Product } from "models/shop/types";
import { useShopContext } from "../shop-context/shop.context";
import { ActionButton } from "components/buttons/action-button/ActionButton.styled";

export const ProductControl = ({ productData }: { productData: Product }) => {
  const { stock, price } = productData;

  const { dispatch } = useShopContext();

  const handleAddToCart = () => {
    // Dispatch an action to add a product to the cart
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
