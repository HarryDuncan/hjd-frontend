import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import { ActionButton } from "components/buttons/action-button/ActionButton.styled";
import Image from "next/image";
import { CheckoutSection, ItemDetails } from "../checkout.styles";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";

const CartTable = () => {
  const {
    dispatch,
    state: { cart },
  } = useShopContext();

  const handleRemoveItem = (productId: number) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        productId,
      },
    });
  };

  return (
    <CheckoutSection>
      <table>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>
                <Image
                  src={`${SHOP_IMAGE_URL_ROOT}${cartItem.product.imageUrl}`}
                  alt={cartItem.product.title}
                  width={100}
                  height={100}
                />
              </td>
              <td>
                <ItemDetails>
                  <p>{cartItem.quantity}</p>
                  <p>{cartItem.product.title}</p>
                  <p>${cartItem.product.price} AUD</p>
                </ItemDetails>
              </td>
              <td>
                <IconButton
                  hasGesture={true}
                  type={IconTypes.TRASH}
                  onClick={() => handleRemoveItem(cartItem.product.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CheckoutSection>
  );
};

export default CartTable;
