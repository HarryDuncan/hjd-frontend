import { useIsNavTop } from "components/navigation/hooks/useIsNavTop";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import React, { useCallback } from "react";
import styled from "styled-components";
import CartStorageHandler from "../cancel/CartStorageHandler";
import { useCartItemCount } from "views/shop/hooks/useCartItemCount";

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
  background-color: ${({ $isDark }) => ($isDark ? "black" : "white")};
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

export const Badge = styled.div`
  position: absolute;
  bottom: -10px;
  right: 0px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 50%;
  padding: 4px 8px;
  font-family: ${({ theme }) => theme.font.alternative.family};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    bottom: 0px;
    right: 0px;
    padding: 2px 5px;
  }
`;

const CartWithDropdown: React.FC = () => {
  const isNavTop = useIsNavTop();
  const handleRouting = useHandleRouting("/checkout");
  const itemCount = useCartItemCount();
  const onClick = useCallback(() => {
    if (itemCount > 0) {
      handleRouting();
    }
  }, [handleRouting, itemCount]);
  if (itemCount === 0) {
    return null;
  }
  return (
    <CartIconContainer>
      <CartStorageHandler resetInventoryEnabled={false} />
      <CartIcon onClick={onClick} $isDark={isNavTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          width="30px"
          height="30px"
          viewBox="0 0 902.86 902.86"
          fill={isNavTop ? "white" : "black"}
          stroke={isNavTop ? "white" : "black"}
        >
          <g>
            <g>
              <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
              <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z" />
            </g>
          </g>
        </svg>
        {itemCount > 0 && <Badge>{itemCount}</Badge>}
      </CartIcon>
    </CartIconContainer>
  );
};

export default CartWithDropdown;
