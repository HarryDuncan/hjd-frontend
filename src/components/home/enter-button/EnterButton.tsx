import { ButtonText, CircleButton } from "./EnterButton.styles";

interface EnterButtonProps {
  onClick: () => void;
}
export const EnterButton = ({ onClick }: EnterButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      <ButtonText>Enter</ButtonText>
      <svg className="circle-svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="enter-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.7)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
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
