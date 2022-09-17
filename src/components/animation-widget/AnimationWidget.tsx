import React, { useEffect } from "react";
import { AnimationWidgetScene } from "./types";
import { useRunAnimations } from "./useRunAnimations";
import { RootContainer } from "../root-container";

interface AnimationWidgetProps {
  scenes: AnimationWidgetScene[];
  viewHeight?: string;
  viewWidth?: string;
}

// Scene framework for displaying multiple function based scenes
const AnimationWidget = ({
  scenes,
  viewWidth = "100vw",
  viewHeight = "100vh",
}: AnimationWidgetProps) => {
  const { container, currentFrameRef, pause } = useRunAnimations(scenes);

  useEffect(() => () => pause(), [currentFrameRef]);

  return (
    <RootContainer
      containerRef={container}
      viewWidth={viewWidth}
      viewHeight={viewHeight}
    />
  );
};

export default AnimationWidget;
