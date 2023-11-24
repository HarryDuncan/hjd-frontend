import { Button } from "@chakra-ui/react";
import { ContentSubText } from "components/text/Text";
import { Product } from "models/shop/types";
import { useShopContext } from "../shop-context/shop.context";

export const ProductControl = ({ productData }: { productData: Product }) => {
  const { stock, price } = productData;

  const { state, dispatch } = useShopContext();

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
        <Button colorScheme="blackAlpha" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      ) : (
        <ContentSubText>Sold Out</ContentSubText>
      )}
    </>
  );
};
