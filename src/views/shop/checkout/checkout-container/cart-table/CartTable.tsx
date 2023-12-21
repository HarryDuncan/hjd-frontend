import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import { ActionButton } from "components/buttons/action-button/ActionButton.styled";
import Image from "next/image";
import { CheckoutSection, ItemDetails } from "../checkout.styles";
import { useShopContext } from "views/shop/shop-context/shop.context";

const CartTable = () => {
  const {
    state: { cart },
  } = useShopContext();

  const handleRemoveItem = (productId: number) => {
    // onRemoveItem(productId);
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
                <ActionButton
                  onClick={() => handleRemoveItem(cartItem.product.id)}
                >
                  Delete
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CheckoutSection>
  );
};

export default CartTable;
