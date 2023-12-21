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
                <stop offset="0%" style={{ stopColor: "rgba(46,46,46,0.7)" }} />
                <stop offset="25%" style={{ stopColor: "rgba(2,0,26,0.7)" }} />
                <stop offset="50%" style={{ stopColor: "rgba(2,0,6,0.7)" }} />
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
