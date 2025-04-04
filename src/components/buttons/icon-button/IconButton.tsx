import {
  EXIT,
  SCROLL_LEFT,
  SCROLL_RIGHT,
  TRASH,
  DOWN,
  BACK,
} from "constants/ui.constants";
import { IconContainer } from "./IconButton.styles";
import {
  DefaultIconProps,
  IconProps,
  IconTypes,
  OnClickFunction,
  OnIconClick,
  ScrollIconProps,
} from "./IconButton.types";
import { HoverImage } from "components/animations/gesture-animations/hover/HoverImage";
import { Direction } from "utils/moveThroughArray";

const BackIcon = ({ onClick }: DefaultIconProps) => {
  return (
    <IconContainer className="back-icon">
      <HoverImage alt="back" src={BACK} onClick={onClick} />
    </IconContainer>
  );
};
const ExitIcon = ({ onClick }: DefaultIconProps) => {
  return (
    <IconContainer className="exit-icon">
      <HoverImage alt="exit" src={EXIT} onClick={onClick} />
    </IconContainer>
  );
};

const ScrollLeftIcon = ({ onClick }: ScrollIconProps) => {
  const onIconClick = () => {
    onClick(Direction.REVERSE);
  };
  return (
    <IconContainer className="scroll-left-icon">
      <HoverImage alt="scroll-left" src={SCROLL_LEFT} onClick={onIconClick} />
    </IconContainer>
  );
};

const ScrollRightIcon = ({ onClick }: ScrollIconProps) => {
  const onIconClick = () => {
    onClick(Direction.FORWARD);
  };

  return (
    <IconContainer className="scroll-right-icon">
      <HoverImage alt="scroll-right" src={SCROLL_RIGHT} onClick={onIconClick} />
    </IconContainer>
  );
};

const TrashIcon = ({ onClick }: DefaultIconProps) => (
  <IconContainer className="trash-icon">
    <HoverImage alt="trash" src={TRASH} onClick={onClick} />
  </IconContainer>
);

const DownIcon = ({ onClick }: DefaultIconProps) => (
  <IconContainer className="down-icon">
    <HoverImage alt="down" src={DOWN} onClick={onClick} />
  </IconContainer>
);

const getIcon = (type: string, onClick: OnIconClick) => {
  switch (type) {
    case IconTypes.EXIT:
      return <ExitIcon onClick={onClick as OnClickFunction} />;
    case IconTypes.CHEVRON_LEFT:
      return <ScrollLeftIcon onClick={onClick} />;
    case IconTypes.CHEVRON_RIGHT:
      return <ScrollRightIcon onClick={onClick} />;
    case IconTypes.TRASH:
      return <TrashIcon onClick={onClick as OnClickFunction} />;
    case IconTypes.DOWN:
      return <DownIcon onClick={onClick as OnClickFunction} />;
    case IconTypes.BACK:
      return <BackIcon onClick={onClick as OnClickFunction} />;
    default:
      console.warn("no valid icon type");
      return <div />;
  }
};
export const IconButton = ({ type, onClick }: IconProps) => {
  const IconElement = getIcon(type, onClick);
  return IconElement;
};
