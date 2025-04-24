import { ButtonText } from "../circle-action-button/CircleActionButton.styles";
import { ButtonTextContainer, SVGButtonContainer } from "../SVGButton.styles";

interface ActionButtonProps {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isDark?: boolean;
  type?: "button" | "submit" | "reset";
}
export const ActionButton = ({
  isDisabled = false,
  title,
  onClick,
  isDark = true,
  type = "button",
}: ActionButtonProps) => {
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <SVGButtonContainer
      isDark={isDark}
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <ButtonTextContainer>
        <ButtonText>{title}</ButtonText>
      </ButtonTextContainer>
    </SVGButtonContainer>
  );
};
