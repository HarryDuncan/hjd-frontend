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

    const handleLoad = () => {
      const svgDocument =
        objectElement.contentDocument || objectElement.getSVGDocument?.();
      if (!svgDocument) return;

      const svgElement = svgDocument.querySelector("svg");
      if (svgElement) {
        svgElement.style.cursor = "pointer"; // Add cursor pointer
        svgElement.addEventListener("click", onClick);
      }
    };

    objectElement.addEventListener("load", handleLoad);

    return () => {
      objectElement.removeEventListener("load", handleLoad);

      const svgDocument =
        objectElement.contentDocument || objectElement.getSVGDocument?.();

      const svgElement = svgDocument?.querySelector("svg");
      if (svgElement) {
        svgElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick, dataUrl]);

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
