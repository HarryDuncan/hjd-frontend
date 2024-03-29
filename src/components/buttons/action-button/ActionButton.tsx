import { StyledActionButton } from "./ActionButton.styles";

interface ActionButtonProps {
  title: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
}
export const ActionButton = ({
  isDisabled = false,
  title,
  onClick,
  type = "button",
}: ActionButtonProps) => {
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledActionButton
      type={type}
      onClick={handleClick}
      $disabled={isDisabled}
    >
      {title}
    </StyledActionButton>
  );
};
