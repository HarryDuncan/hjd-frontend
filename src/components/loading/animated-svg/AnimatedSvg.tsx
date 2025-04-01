import React, { useEffect, useState } from "react";

export const AnimatedSVG = () => {
  //  const [svgContent, setSvgContent] = useState<string>("");
  const [randomMessage, setRandomMessage] = useState<string>("");

  // useEffect(() => {
  //   const fetchSvg = async () => {
  //     try {
  //       const response = await fetch(svgUrl);
  //       const text = await response.text();
  //       setSvgContent(text);
  //     } catch (error) {
  //       console.error("Error fetching SVG:", error);
  //     }
  //   };

  //   fetchSvg();
  // }, [svgUrl]);

  const messages = [
    "Loading... Please wait.",
    "Compiling infinite loops...",
    "Reticulating splines...",
    "Optimizing the optimizer...",
    "Debugging the debugger...",
    "Rendering pixels with love...",
    "Fetching coffee for the CPU...",
    "Turning it off and on again...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = messages[Math.floor(Math.random() * messages.length)];
      setRandomMessage(newMessage);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [messages]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <object type="image/svg+xml" data="/loader-svg.svg">
        svg-animation
      </object>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
        {randomMessage}
      </p>
    </div>
  );
};
