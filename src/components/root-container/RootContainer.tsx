import React from "react";
import { Root } from "./RootContainer.styles";

interface IRootContainerProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  viewWidth?: string;
  viewHeight?: string;
}
// Scene manager for displaying multiple scenes in a particular setting
export function RootContainer({
  containerRef,
  viewWidth = "1000px",
  viewHeight = "1000px",
}: IRootContainerProps) {
  return <Root $height={viewHeight} $width={viewWidth} ref={containerRef} />;
}
