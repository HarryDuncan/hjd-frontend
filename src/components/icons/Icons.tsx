import {
  EXIT,
  EXIT_POSITIONS,
  SCROLL_LEFT,
  SCROLL_LEFT_POSITIONS,
  SCROLL_RIGHT,
  SCROLL_RIGHT_POSITIONS,
} from "constants/ui.constants";
import { IconContainer } from "./Icons.styles";
import {
  ExitIconProps,
  IconProps,
  IconTypes,
  OnClickFunction,
  OnIconClick,
  ScrollIconProps,
} from "./Icons.types";
import { HoverImage } from "components/animations/gesture-animations/hover/HoverImage";
import { Direction } from "utils/moveThroughArray";

const ExitIcon = ({ onClick }: ExitIconProps) => {
  const { position, mobile, tablet } = EXIT_POSITIONS;
  return (
    <IconContainer
      $position={position}
      $mobilePosition={mobile}
      $tabletPosition={tablet}
      className="exit-icon"
    >
      <HoverImage alt="exit" src={EXIT} onClick={onClick} />
    </IconContainer>
  );
};

const ScrollLeftIcon = ({ onClick }: ScrollIconProps) => {
  const onIconClick = () => {
    onClick(Direction.REVERSE);
  };
  const { position, mobile, tablet } = SCROLL_LEFT_POSITIONS;
  return (
    <IconContainer
      $position={position}
      $mobilePosition={mobile}
      $tabletPosition={tablet}
      className="scroll-left"
    >
      <HoverImage alt="scroll-left" src={SCROLL_LEFT} onClick={onIconClick} />
    </IconContainer>
  );
};

const ScrollRightIcon = ({ onClick }: ScrollIconProps) => {
  const onIconClick = () => {
    onClick(Direction.FORWARD);
  };
  const { position, mobile, tablet } = SCROLL_RIGHT_POSITIONS;
  return (
    <IconContainer
      $position={position}
      $mobilePosition={mobile}
      $tabletPosition={tablet}
      className="scroll-right"
    >
      <HoverImage alt="scroll-right" src={SCROLL_RIGHT} onClick={onIconClick} />
    </IconContainer>
  );
};

const getIcon = (type: IconTypes, onClick: OnIconClick) => {
  switch (type) {
    case IconTypes.EXIT:
      return <ExitIcon onClick={onClick as OnClickFunction} />;
    case IconTypes.CHEVRON_LEFT:
      return <ScrollLeftIcon onClick={onClick} />;
    case IconTypes.CHEVRON_RIGHT:
      return <ScrollRightIcon onClick={onClick} />;
    default:
      console.warn("no valid icon type");
      return <div />;
  }
};
export const Icon = ({ type, onClick }: IconProps) => {
  const IconElement = getIcon(type, onClick);

  return IconElement;
};
