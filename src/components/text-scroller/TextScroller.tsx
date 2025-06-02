import React, { useState } from "react";
import { TextScrollerContainer, TextScrollerText } from "./TextScroller.styles";

interface TextScrollerProps {
  text: string;
  isLight?: boolean;
  textPosition?: string;
  direction?: "left" | "right";
}

export const TEXT_POSITIONS = {
  START: "start",
  CENTER: "center",
};

export const TextScroller = ({
  text,
  isLight = true,
  textPosition = TEXT_POSITIONS.CENTER,
  direction = "left",
}: TextScrollerProps) => {
  const [animating, setAnimating] = useState(true);

  const textData = text
    .repeat(50)
    .split("")
    .map((char, index) => ({ char, id: index }));

  return (
    <TextScrollerContainer
      $verticalPosition={textPosition}
      $isAnimating={animating}
      $direction={direction}
      onAnimationEnd={() => setAnimating(false)}
    >
      {textData.map(({ char, id }) => (
        <TextScrollerText key={`text-${id}`} $isLight={isLight}>
          {char}
        </TextScrollerText>
      ))}
    </TextScrollerContainer>
  );
};
