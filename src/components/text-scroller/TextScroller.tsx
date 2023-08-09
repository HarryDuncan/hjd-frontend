import React, { useState } from "react";
import { TextScrollerContainer, TextScrollerText } from "./TextScroller.styles";

interface TextScrollerProps {
  text: string;
  textPosition?: string;
}
export const TEXT_POSITIONS = {
  START: "start",
  CENTER: "center",
};
export const TextScroller = ({
  text,
  textPosition = TEXT_POSITIONS.CENTER,
}: TextScrollerProps) => {
  const [animating, setAnimating] = useState(true);

  const textData = text
    .repeat(100)
    .split("")
    .map((char, index) => ({ char, id: index }));
  return (
    <TextScrollerContainer
      $verticalPosition={textPosition}
      $isAnimating={animating}
      onAnimationEnd={() => setAnimating(false)}
    >
      {textData.map(({ char, id }) => (
        <TextScrollerText key={`text-${id}`} $isLight>
          {char}
        </TextScrollerText>
      ))}
    </TextScrollerContainer>
  );
};
