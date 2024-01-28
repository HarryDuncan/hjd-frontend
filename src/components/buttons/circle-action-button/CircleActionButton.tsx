import { RefObject, forwardRef } from "react";
import { ButtonText, CircleButton } from "./CircleActionButton.styles";

interface CircleButtonProps {
  onClick: () => void;
  buttonText: string;
}
export const CircleActionButton = forwardRef(
  ({ onClick, buttonText }: CircleButtonProps, ref) => {
    return (
      <CircleButton
        ref={ref as RefObject<HTMLButtonElement> | null}
        onClick={onClick}
      >
        <ButtonText>{buttonText}</ButtonText>
        <svg className="circle-svg" viewBox="0 0 100 100">
          <circle
            stroke="white"
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="48"
            fill="white"
          />
        </svg>
      </CircleButton>
    );
  }
);
