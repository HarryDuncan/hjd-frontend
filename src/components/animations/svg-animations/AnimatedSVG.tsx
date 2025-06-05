import { useEffect, useRef } from "react";

interface AnimatedSVGProps {
  id: string;
  dataUrl: string;
  onClick?: () => void;
}

export const AnimatedSVG = ({ id, dataUrl, onClick }: AnimatedSVGProps) => {
  const objectRef = useRef<HTMLObjectElement | null>(null);

  useEffect(() => {
    const objectElement = objectRef.current;
    if (!objectElement || !onClick) return;

    let attempts = 0;
    const maxAttempts = 10;

    const attachHandler = () => {
      const svgDocument =
        objectElement.contentDocument || objectElement.getSVGDocument?.();
      const svgElement = svgDocument?.querySelector("svg");

      if (svgElement) {
        svgElement.style.cursor = "pointer";
        svgElement.addEventListener("click", onClick);
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(attachHandler, 100);
      } else {
        console.warn("SVG failed to load or script blocked access.");
      }
    };

    objectElement.addEventListener("load", attachHandler);

    // If already loaded
    if (objectElement.contentDocument) {
      attachHandler();
    }

    return () => {
      objectElement.removeEventListener("load", attachHandler);
      const svgDoc =
        objectElement.contentDocument || objectElement.getSVGDocument?.();
      const svgElement = svgDoc?.querySelector("svg");
      if (svgElement) {
        svgElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick, objectRef]);

  return (
    <object
      ref={objectRef}
      id={id}
      type="image/svg+xml"
      data={dataUrl}
      aria-label="Interactive SVG"
    >
      {id}
    </object>
  );
};
