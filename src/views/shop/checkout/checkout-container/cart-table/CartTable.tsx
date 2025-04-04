import Image from "next/image";
import {
  CartTableControl,
  CartTableRow,
  CheckoutSection,
  ItemDetails,
  TableImageContainer,
} from "../checkout.styles";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useCallback, useMemo } from "react";
import { SpinButton } from "components/inputs/spin-button/SpinButton";
import { LineItem } from "models/shop/types";
import { useShopData } from "views/shop/hooks/useShopData";

interface CartTableProps {
  isReadOnly?: boolean;
  parsedCartData?: LineItem[];
}

const useGetProductStock = () => {
  const { products, productVariations } = useShopData();
  return useCallback(
    (itemGuid: string) => {
      const product = products.find(({ guid }) => guid === itemGuid);
      if (product) {
        return product.stock;
      }
      const productVariation = productVariations.find(
        (variation) => variation.guid === itemGuid
      );
      if (productVariation) {
        const parentProduct = products.find(
          ({ id }) => id === productVariation.productId
        );
        return productVariation ? productVariation.stock : parentProduct?.stock;
      }
      return 0;
    },
    [products, productVariations]
  );
};
const CartTable = ({ isReadOnly = false, parsedCartData }: CartTableProps) => {
  const { dispatch, cartData } = useCartTableData(parsedCartData);
  const handleRemoveItem = (itemGuid: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        itemGuid,
      },
    });
  };
  const handleUpdateQuantity = (updatedQuantity: number, itemGuid: string) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        itemGuid,
        quantity: updatedQuantity,
      },
    });
  };

  const getProductStock = useGetProductStock();

  return (
    <CheckoutSection>
      {cartData.map((lineItem) => (
        <CartTableRow key={lineItem.guid}>
          <TableImageContainer>
            <Image
              src={lineItem.imageUrl ?? ""}
              alt={lineItem.title}
              fill
              objectFit="contain"
            />
          </TableImageContainer>
          <ItemDetails>
            <p>
              {lineItem.title} {isReadOnly && ` X ${lineItem.quantity}`}
            </p>
            <p>${lineItem.price} AUD</p>
          </ItemDetails>
          {!isReadOnly && (
            <CartTableControl>
              <SpinButton
                value={lineItem.quantity}
                max={getProductStock(lineItem.guid)}
                min={1}
                onChange={(updatedValue: number) => {
                  handleUpdateQuantity(updatedValue, lineItem.guid);
                }}
              />
              <IconButton
                hasGesture
                type={IconTypes.TRASH}
                onClick={() => handleRemoveItem(lineItem.guid)}
                aria-label="Remove item from cart"
              />
            </CartTableControl>
          )}
        </CartTableRow>
      ))}
    </CheckoutSection>
  );
};

const useCartTableData = (parsedCartData: LineItem[] | undefined) => {
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
