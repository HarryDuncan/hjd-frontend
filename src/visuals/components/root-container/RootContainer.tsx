import React from "react";
import { Root } from "./RootContainer.styles";
// import { VideoBackground } from "../video-background/VideoBackground";

export type VisualComponentConfig = {
  viewWidth: string;
  viewHeight: string;
  backgroundColor: string;
  backgroundUrl: string;
};
const DEFAULT_VISUAL_COMPONENT_CONFIG = {
  viewWidth: "100vw",
  viewHeight: "100vh",
  backgroundColor: "white",
  backgroundUrl: "",
};

interface IRootContainerProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  config?: Partial<VisualComponentConfig>;
}
// Scene manager for displaying multiple scenes in a particular setting
export function RootContainer({
  containerRef,
  config = DEFAULT_VISUAL_COMPONENT_CONFIG,
}: IRootContainerProps) {
  const { viewHeight, viewWidth, backgroundColor } = config;
  const { video } = { video: undefined };

  return (
    <Root
      $height={viewHeight}
      $width={viewWidth}
      ref={containerRef}
      $backgroundColor={backgroundColor}
    />
  );
}
//  <VideoBackground videoSrc={video?.src} />
