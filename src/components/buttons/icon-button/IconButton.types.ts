export type OnScrollFunction = (direction: string) => void;
export type OnClickFunction = () => void;
export type OnIconClick = OnScrollFunction | OnClickFunction;

export const IconTypes = {
  EXIT: "EXIT",
  CHEVRON_LEFT: "CHEVRON_LEFT",
  CHEVRON_RIGHT: "CHEVRON_RIGHT",
  TRASH: "TRASH",
  DOWN: "DOWN",
  BACK: "BACK",
};

export interface IconProps {
  type: string;
  onClick: OnIconClick;
  hasGesture: boolean;
}

export interface DefaultIconProps {
  onClick: OnClickFunction;
}
export interface ScrollIconProps {
  onClick: OnScrollFunction;
}

export type IconPosition = {
  positionType: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
