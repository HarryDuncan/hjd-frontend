import { ContentText } from "components/text/Text";
import React, { useEffect, useMemo, useState } from "react";
import { LoaderContainer } from "./AnimatedSvg.styles";
import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";

export const AnimatedSVGLoader = () => {
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
      <AnimatedSVG id="loader-svg" dataUrl="/loader-svg.svg" />
      <ContentText>{randomMessage}</ContentText>
    </LoaderContainer>
  );
};
