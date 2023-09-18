import { Direction } from "utils/moveThroughArray";

export type OnScrollFunction = (direction: Direction) => void;
export type OnClickFunction = () => void;
export type OnIconClick = OnScrollFunction | OnClickFunction;

export enum IconTypes {
  EXIT = "EXIT",
  CHEVRON_LEFT = "CHEVRON_LEFT",
  CHEVRON_RIGHT = "CHEVRON_RIGHT",
}

export interface IconProps {
  type: IconTypes;
  onClick: OnIconClick;
  hasGesture: boolean;
}

export interface ScrollIconProps {
  onClick: OnScrollFunction;
}

export interface ExitIconProps {
  onClick: OnClickFunction;
}

export type IconPosition = {
  positionType: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
