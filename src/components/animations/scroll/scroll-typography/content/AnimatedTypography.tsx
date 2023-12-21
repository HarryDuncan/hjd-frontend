import { useRef, useEffect } from "react";
import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "../ScrollTypography.styles";
import { TEXT_TYPE } from "../scrollTypography.consts";
import { ScrollTypographyConfig } from "../scrollTypography.types";
import { useTypographyAnimations } from "../typography-animations/useTypeograhpyAnimations";

interface AnimatedTypographyProps {
  text: string;
  textType: string;
  config: Partial<ScrollTypographyConfig>;
}

export const AnimatedTypography = ({
  text,
  textType,
  config,
}: AnimatedTypographyProps) => {
  const scrollTextRef = useRef<HTMLHeadingElement | null>(null);
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
          return <span key={charKey}>{char}</span>;
        })}
      </ScrolledTypographyHeader>
    );
  }
  return (
    <ScrolledTypographyText ref={scrollTextRef}>
      {text.split("").map((char, index) => {
        const charKey = `${char}-${index}`;
        return <span key={charKey}>{char}</span>;
      })}
    </ScrolledTypographyText>
  );
};
