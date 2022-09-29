import { useState } from "react";

interface HoverableIconProps {
  iconName: string;
  iconSrc: string;
  iconHoveredSrc: string;
}

export const HoverableIcon = ({
  iconName,
  iconSrc,
  iconHoveredSrc,
}: HoverableIconProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <img
      id={iconName}
      alt={iconName}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      style={{
        height: 24,
      }}
      src={isHovered ? iconHoveredSrc : iconSrc}
    />
  );
};
