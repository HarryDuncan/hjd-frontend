import { RefObject, forwardRef } from "react";
import { ButtonText, CircleButton } from "./circleActionButton.styled";

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
          <defs>
            <defs>
              <radialGradient
                id="enter-gradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" style={{ stopColor: "rgba(96,96,96,0.7)" }} />
                <stop
                  offset="25%"
                  style={{ stopColor: "rgba(74,74,74,0.7)" }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "rgba(57,57,57,0.7)" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(27,27,27,0.7)" }}
                />
              </radialGradient>
            </defs>
          </defs>
          <circle
            stroke="white"
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="48"
            fill="url(#enter-gradient)"
          />
        </svg>
      </CircleButton>
    );
  }
);
