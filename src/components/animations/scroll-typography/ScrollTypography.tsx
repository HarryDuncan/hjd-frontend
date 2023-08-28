import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "./ScrollTypography.styled";
import { CHAR_ANIMATIONS, TEXT_TYPE } from "./scrollTypeography.consts";
import { useTypographyAnimations } from "./useTypeograhpyAnimations";

interface ScrollTypographyProps {
  text: string;
  textType?: string;
}

export const ScrollTypography = ({
  text,
  textType = "HEADER",
}: ScrollTypographyProps) => {
  const scrollTextRef = useRef();
  gsap.registerPlugin(ScrollTrigger);
  const setAnimation = useTypographyAnimations(CHAR_ANIMATIONS.MULTI_FLASH);
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
