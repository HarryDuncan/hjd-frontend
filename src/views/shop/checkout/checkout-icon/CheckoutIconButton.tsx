import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useIsNavTop } from "components/navigation/hooks/useIsNavTop";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import CartStorageHandler from "../cancel/CartStorageHandler";
import { useCartItemCount } from "views/shop/hooks/useCartItemCount";
import { useShopContext } from "views/shop/shop-context/shop.context";
import { useShopDataFromStorage } from "views/shop/hooks/useShopDataFromStorage";
import CartTable from "../checkout-container/cart-table/CartTable";
import { CheckoutTotal } from "../checkout-container/checkout-total/CheckoutTotal";
import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { CallToAction } from "components/buttons/call-to-action/CallToAction";

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  padding: 0.7rem 0.5rem 0.5rem 1rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    padding: 0.3rem 0.2rem 0.5rem 0.2rem;
    margin-right: -15px;
  }
`;

const CartIcon = styled.div<{ $isDark: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    height: 35px;
    width: 35px;
  }
`;

export const Badge = styled.div<{ $isNavTop?: boolean }>`
  position: absolute;
  top: 28px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: ${({ $isNavTop }) => ($isNavTop ? "white" : "black")};
  font-family: ${({ theme }) => theme.font.alternative.family};
  font-size: ${({ theme }) => theme.font.size.xSmall};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    bottom: 0px;
    right: 0px;
    padding: 2px 5px;
  }
`;
const Callout = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 500px;
  z-index: 10;
  animation: growDown 0.3s ease-in-out;

  @keyframes growDown {
    0% {
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top;
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
      transform-origin: top;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

const useSetCartFromStorage = () => {
  const {
    dispatch,
    state: { cart },
  } = useShopContext();
  const { cart: storedCart, hasCheckedOut } = useShopDataFromStorage();
  useEffect(() => {
    if (storedCart.length && !hasCheckedOut && !cart.length) {
      dispatch({ type: "UPDATE_CART", payload: storedCart });
    }
  }, [dispatch, storedCart, hasCheckedOut, cart]);
};

const CartWithDropdown: React.FC = () => {
  useSetCartFromStorage();
  const isNavTop = useIsNavTop();
  const handleRouting = useHandleRouting("/checkout");
  const itemCount = useCartItemCount();
  const {
    state: { cart, shippingTotal },
  } = useShopContext();
  const [isHovered, setIsHovered] = useState(false);
  const checkoutTotal = useCalculateTotal(cart, shippingTotal);
  const onClick = useCallback(() => {
    if (itemCount > 0) {
      handleRouting();
    }
  }, [handleRouting, itemCount]);

  if (itemCount === 0) {
    return null;
  }

  return (
    <CartIconContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CartStorageHandler resetInventoryEnabled={false} />
      <CartIcon
        onClick={() => setIsHovered((prev) => !prev)}
        $isDark={isNavTop}
      >
        {itemCount > 0 && <Badge $isNavTop={isNavTop}>{itemCount}</Badge>}
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 22 22"
          fill={isNavTop ? "white" : "black"}
          stroke={isNavTop ? "white" : "black"}
        >
          <path
            d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
            strokeWidth="2"
            strokeLinecap="round"
            stroke={isNavTop ? "black" : "white"}
          />
          <path
            d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
            stroke={isNavTop ? "black" : "white"}
            fill={isNavTop ? "black" : "white"}
          />
        </svg>
      </CartIcon>
      {isHovered && (
        <Callout>
          <CartTable />
          <CheckoutTotal total={checkoutTotal} />
          <CallToAction onClick={onClick} text="Checkout" />
        </Callout>
      )}
    </CartIconContainer>
  );
};

export default CartWithDropdown;
