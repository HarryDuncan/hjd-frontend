import { ControlButtonContainer } from "../AudioController.styles";
import { HoverableIcon } from "./HoverableIcon";

interface IconProps {
  iconName: string;
  iconHoveredSrc: string;
  iconSrc: string;
}
export interface ControlButton {
  handleClick: () => void;
  iconProps: IconProps;
}

export const ControlButton = ({
  handleClick,
  iconProps: { iconName, iconHoveredSrc, iconSrc },
}: ControlButton) => {
  return (
    <ControlButtonContainer onClick={handleClick}>
      <HoverableIcon
        iconName={iconName}
        iconHoveredSrc={iconHoveredSrc}
        iconSrc={iconSrc}
      />
    </ControlButtonContainer>
  );
};
