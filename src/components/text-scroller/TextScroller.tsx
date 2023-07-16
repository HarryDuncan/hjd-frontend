import React, { useState } from "react";
import { TextScrollerContainer, TextScrollerText } from "./TextScroller.styles";

interface TextScrollerProps {
  text: string;
}

export const TextScroller = ({ text }: TextScrollerProps) => {
  const [animating, setAnimating] = useState(true);

  const textData = text
    .repeat(100)
    .split("")
    .map((char, index) => ({ char, id: index }));
  return (
    <TextScrollerContainer
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
