import React, { useState } from "react";
import { TextScrollerContainer, TextScrollerText } from "./TextScroller.styles";

interface TextScrollerProps {
  text: string;
}

export const TextScroller = ({ text }: TextScrollerProps) => {
  const [animating, setAnimating] = useState(true);

  return (
    <TextScrollerContainer
      $isAnimating={animating}
      onAnimationEnd={() => setAnimating(false)}
    >
      {text
        .repeat(100)
        .split("")
        .map((char) => (
          <TextScrollerText $isLight>{char}</TextScrollerText>
        ))}
    </TextScrollerContainer>
  );
};
