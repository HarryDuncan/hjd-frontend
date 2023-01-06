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
  let width = "100vw";
  setTimeout(() => {
    width = "100.1vw";
    console.log("asdasd");
  }, 10000);
  return (
    <RootContainer
      containerRef={container}
      viewWidth={width}
      viewHeight={viewHeight}
    />
  );
};

export default AnimationWidget;
