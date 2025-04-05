import { RefObject, forwardRef, useState } from "react";
import { ButtonText, CircleButton } from "./CircleActionButton.styles";

interface CircleButtonProps {
  onClick: () => void;
  title: string;
  circleFill?: string;
  disabled?: boolean;
}

const DISABLED_CIRCLE_FILL = "#D3D3D3";
export const CircleActionButton = forwardRef(
  (
    {
      onClick,
      title,
      circleFill = "white",
      disabled = false,
    }: CircleButtonProps,
    ref
  ) => {
    const handleButtonClick = () => {
      if (!disabled) {
        onClick();
      }
    };
    const [hovered, setHovered] = useState(false);

    return (
      <CircleButton
        $disabled={disabled}
        ref={ref as RefObject<HTMLButtonElement> | null}
        onClick={handleButtonClick}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <svg
          className={`circle-svg ${hovered ? "hovered-circle" : ""}`}
          viewBox="0 0 100 100"
        >
          <circle
            stroke="white"
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="48"
            fill={disabled ? DISABLED_CIRCLE_FILL : circleFill}
          />
        </svg>
        <ButtonText className={hovered ? "hovered-title" : ""}>
          {title}
        </ButtonText>
      </CircleButton>
    );
  }
);
