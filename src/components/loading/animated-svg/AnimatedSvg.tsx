import { ContentText } from "components/text/Text";
import React, { useEffect, useMemo, useState } from "react";
import { LoaderContainer } from "./AnimatedSvg.styles";

export const AnimatedSVG = () => {
  const [randomMessage, setRandomMessage] = useState<string>("");

  const messages = useMemo(
    () => [
      "Compiling infinite loops...",
      "Reticulating splines...",
      "Optimizing the optimizer...",
      "Debugging the debugger...",
      "Rendering pixels with love...",
      "Fetching coffee for the CPU...",
      "Turning it off and on again...",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = messages[Math.floor(Math.random() * messages.length)];
      setRandomMessage(newMessage);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [messages]);

  return (
    <LoaderContainer>
      <object type="image/svg+xml" data="/loader-svg.svg">
        svg-animation
      </object>
      <ContentText>{randomMessage}</ContentText>
    </LoaderContainer>
  );
};
