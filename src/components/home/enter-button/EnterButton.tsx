import { ButtonText, CircleButton } from "./EnterButton.styles";

interface EnterButtonProps {
  onClick: () => void;
}
export const EnterButton = ({ onClick }: EnterButtonProps) => {
  return (
    <CircleButton onClick={onClick}>
      <ButtonText>Enter</ButtonText>
      <svg className="circle-svg" viewBox="0 0 100 100">
        <circle vectorEffect="non-scaling-stroke" cx="50" cy="50" r="48" />
      </svg>
    </CircleButton>
  );
};
