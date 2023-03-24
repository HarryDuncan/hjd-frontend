import React from "react";
import { useAppSelector } from "redux/store";
import { VisualComponentConfig } from "redux/visual/types";
import { Layers } from "../../layers/Layers";
import { Root } from "./RootContainer.styles";
import { VideoBackground } from "../video-background/VideoBackground";

interface IRootContainerProps {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  config?: Partial<VisualComponentConfig>;
}
// Scene manager for displaying multiple scenes in a particular setting
export function RootContainer({ containerRef, config }: IRootContainerProps) {
  const { visualComponentConfig, visualData } = useAppSelector(
    (state) => state.visual
  );
  const componentConfig = { ...visualComponentConfig, ...config };
  const { viewHeight, viewWidth, backgroundColor } = componentConfig;
  const { video } = visualData;

  return (
    <>
      <Layers />
      <Root
        $height={viewHeight}
        $width={viewWidth}
        ref={containerRef}
        $backgroundColor={backgroundColor}
      />
      <VideoBackground videoSrc={video?.src} />
    </>
  );
}
