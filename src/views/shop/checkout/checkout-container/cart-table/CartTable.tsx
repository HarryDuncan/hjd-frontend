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
import { useCallback, useMemo } from "react";
import { SpinButton } from "components/inputs/spin-button/SpinButton";
import { Product, ProductVariation } from "models/shop/types";
import { useShopData } from "views/shop/hooks/useShopData";

interface CartTableProps {
  isReadOnly?: boolean;
  parsedCartData?: CartItem[];
}

const useFormatImageUrls = () => {
  const { products } = useShopData();
  return useCallback(
    (product: Product | ProductVariation) => {
      const imageUrls = product.imageUrls
        ? product.imageUrls
        : products.find((p) => p.id === product.productId)?.imageUrls;
      if (imageUrls) {
        return imageUrls.map((url) => `${SHOP_IMAGE_URL_ROOT}${url}`);
      }
      return [];
    },
    [products]
  );
};

const ItemTitle = ({
  cartItem,
  isReadOnly,
}: {
  cartItem: CartItem;
  isReadOnly: boolean;
}) => {
  const { products } = useShopData();
  const getTitle = useCallback(
    (product: Product | ProductVariation) => {
      const baseTitle =
        "productId" in product
          ? products.find((p) => p.id === product.productId)?.title ||
            product.title
          : product.title;
      return "productId" in product
        ? `${baseTitle} - ${product.title}`
        : baseTitle;
    },
    [products]
  );

  return (
    <p>
      {getTitle(cartItem.product)} {isReadOnly && ` X ${cartItem.quantity}`}
    </p>
  );
};
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
  const formatImageUrls = useFormatImageUrls();
  return (
    <CheckoutSection>
      {cartData.map((cartItem) => (
        <CartTableRow key={cartItem.product.id}>
          <TableImageContainer>
            <Image
              src={formatImageUrls(cartItem.product)[0]}
              alt={cartItem.product.title}
              fill
              objectFit="contain"
            />
          </TableImageContainer>
          <ItemDetails>
            <ItemTitle cartItem={cartItem} isReadOnly={isReadOnly} />
            <p>${cartItem.product.price} AUD</p>

            {cartItem.errorMessage && <p>{cartItem.errorMessage}</p>}
          </ItemDetails>
          {!isReadOnly && (
            <CartTableControl>
              <SpinButton
                value={cartItem.quantity}
                max={cartItem.product.stock}
                min={1}
                onChange={(updatedValue: number) => {
                  handleUpdateQuantity(updatedValue, cartItem.product.id);
                }}
              />
              <IconButton
                hasGesture
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
