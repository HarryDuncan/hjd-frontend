import { StyledActionButton } from "./ActionButton.styles";

interface ActionButtonProps {
  title: string;
  onClick?: () => void;
  color?: string;
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
  console.log(isDisabled);
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
