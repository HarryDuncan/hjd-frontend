import { ButtonText, CircleButton } from "./circleActionButton.styled";

interface CircleButtonProps {
  onClick: () => void;
  buttonText: string;
}
export const CircleActionButton = ({
  onClick,
  buttonText,
}: CircleButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      <ButtonText>{buttonText}</ButtonText>
      <svg className="circle-svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="enter-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle
          vectorEffect="non-scaling-stroke"
          cx="50"
          cy="50"
          r="48"
          fill="url(#enter-gradient)"
        />
      </svg>
    </CircleButton>
  );
};
