import { useHandleRouting } from "hooks/routing/useHandleRouting";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightblue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const CartWithDropdown: React.FC = () => {
  const handleRouting = useHandleRouting("/checkout");
  const onClick = useCallback(() => {
    handleRouting();
  }, [handleRouting]);
  return (
    <CartIconContainer>
      <CartIcon onClick={onClick}>🛒</CartIcon>
    </CartIconContainer>
  );
};

export default CartWithDropdown;
