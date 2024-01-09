import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import Image from "next/image";
import {
  CartTableControl,
  CartTableRow,
  CheckoutSection,
  ItemDetails,
  TableImageContainer,
} from "../checkout.styles";
import { CartItem, useShopContext } from "views/shop/shop-context/shop.context";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useMemo } from "react";
import { SpinButton } from "components/inputs/spin-button/SpinButton";

interface CartTableProps {
  isReadOnly?: boolean;
  parsedCartData?: CartItem[];
}
const CartTable = ({ isReadOnly = false, parsedCartData }: CartTableProps) => {
  const { dispatch, cartData } = useCartTableData(parsedCartData);
  const handleRemoveItem = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId,
      },
    });
  };
  const handleUpdateQuantity = (updatedQuantity: number, productId: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        productId,
        quantity: updatedQuantity,
      },
    });
  };
  return (
    <CheckoutSection>
      {cartData.map((cartItem) => (
        <CartTableRow key={cartItem.product.id}>
          <TableImageContainer>
            <Image
              src={`${SHOP_IMAGE_URL_ROOT}${cartItem.product.imageUrl}`}
              alt={cartItem.product.title}
              fill={true}
              objectFit={"contain"}
            />
          </TableImageContainer>

          <ItemDetails>
            <p>{cartItem.product.title}</p>
            <p>${cartItem.product.price} AUD</p>
            {cartItem.errorMessage && <p>{cartItem.errorMessage}</p>}
          </ItemDetails>
          {!isReadOnly && (
            <CartTableControl>
              <SpinButton
                value={cartItem.quantity}
                onChange={(updatedValue: number) => {
                  handleUpdateQuantity(updatedValue, cartItem.product.id);
                }}
              />
              <IconButton
                hasGesture={true}
                type={IconTypes.TRASH}
                onClick={() => handleRemoveItem(cartItem.product.id)}
              />
            </CartTableControl>
          )}
        </CartTableRow>
      ))}
    </CheckoutSection>
  );
};

const useCartTableData = (parsedCartData: CartItem[] | undefined) => {
  const {
    dispatch,
    state: { cart },
  } = useShopContext();
  const cartData = useMemo(
    () => parsedCartData || cart,
    [parsedCartData, cart]
  );
  return { dispatch, cartData };
};

export default CartTable;
