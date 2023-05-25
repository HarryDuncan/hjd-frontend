export type ImageHoverConfig = {
  default: ImageProps;
  final: ImageProps;
};

export type ImageProps = {
  heightPx?: number;
  widthPx?: number;
  positionPercentage: { x: number; y: number };
};
