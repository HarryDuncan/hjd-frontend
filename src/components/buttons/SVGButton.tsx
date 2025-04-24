import { useCallback } from "react";
import { ButtonText } from "./circle-action-button/CircleActionButton.styles";
import { ButtonTextContainer, SVGButtonContainer } from "./SVGButton.styles";
import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";

interface SVGButtonProps {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  isDark?: boolean;
}

export const SVGButton = ({
  onClick,
  title,
  disabled = false,
  isDark = false,
}: SVGButtonProps) => {
  const handleButtonClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <SVGButtonContainer onClick={handleButtonClick} disabled={disabled}>
      <ButtonTextContainer>
        <ButtonText>{title}</ButtonText>
      </ButtonTextContainer>
      {!disabled && (
        <AnimatedSVG
          id="svg-button"
          dataUrl={
            isDark
              ? "/assets/animated-svgs/svg-button-dark.svg"
              : "/assets/animated-svgs/svg-button.svg"
          }
          onClick={handleButtonClick}
        />
      )}
    </SVGButtonContainer>
  );
};
