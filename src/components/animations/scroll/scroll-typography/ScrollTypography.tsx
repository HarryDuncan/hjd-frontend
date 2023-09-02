import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "./ScrollTypography.styled";
import { DEFAULT_CONFIG, TEXT_TYPE } from "./scrollTypography.consts";
import { useTypographyAnimations } from "./typography-animations/useTypeograhpyAnimations";
import { ScrollTypographyConfig } from "./scrollTypography.types";

interface ScrollTypographyProps {
  text: string;
  textType?: string;
  config?: ScrollTypographyConfig;
}

export const ScrollTypography = ({
  text,
  textType = "HEADER",
  config = DEFAULT_CONFIG as ScrollTypographyConfig,
}: ScrollTypographyProps) => {
  const scrollTextRef = useRef<HTMLHeadingElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);
  const setAnimation = useTypographyAnimations(config);
  useEffect(() => {
    if (scrollTextRef.current) {
      const chars = scrollTextRef.current.childNodes;
      setAnimation(scrollTextRef.current, chars);
    }
  }, [scrollTextRef, setAnimation]);

  if (textType === TEXT_TYPE.HEADER) {
    return (
      <ScrolledTypographyHeader ref={scrollTextRef}>
        {text.split("").map((char, index) => {
          const charKey = `${char}-${index}`;
          return (
            <span className={`chars-${text}`} key={charKey}>
              {char}
            </span>
          );
        })}
      </ScrolledTypographyHeader>
    );
  }
  return (
    <ScrolledTypographyText ref={scrollTextRef}>
      {text.split("").map((char, index) => {
        const charKey = `${char}-${index}`;
        return (
          <span className={`chars-${text}`} key={charKey}>
            {char}
          </span>
        );
      })}
    </ScrolledTypographyText>
  );
};
