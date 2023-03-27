import React, { useState, useEffect } from "react";
import { Line, MenuButtonContainer } from "./styledComponents";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
  isLight: boolean;
}

export const MenuButton = ({ onClick, isOpen, isLight }: MenuButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <MenuButtonContainer
      onClick={handleClick}
      $isActive={isActive}
      $isLight={isLight}
    >
      <Line />
      <Line />
      <Line />
    </MenuButtonContainer>
  );
};
