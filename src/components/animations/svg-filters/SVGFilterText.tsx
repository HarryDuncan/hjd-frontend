import { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimationOptions } from "./SVGFilters.types";
import { gsap } from "gsap";
import { ContentText } from "components/text/Text";

interface SVGFilterTextProps {
  filterId?: string;
  text: string;
  isLight?: boolean;
}
export const SVGFilterText = ({
  text,
  filterId = "#filter-1",
  isLight = true,
}: SVGFilterTextProps) => {
  const filterRef = useRef<SVGFilterElement | null>(null);
  const animationOptions: AnimationOptions = useMemo(
    () => ({
      text: false,
      line: true,
      filterId,
    }),
    [filterId]
  );
  const lineRef = useRef<HTMLDivElement | null>(null);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        paused: true,
        onStart: () => {
          if (animationOptions.line && lineRef?.current) {
            lineRef.current.style.filter = `url(${animationOptions.filterId})`;
          }
        },
        onComplete: () => {
          if (animationOptions.line && lineRef?.current) {
            lineRef.current.style.filter = "none";
          }
        },
      }),
    [animationOptions, lineRef]
  );

  const onMouseEnter = useCallback(() => {
    timeline.restart();
  }, [timeline]);
  const onMouseLeave = useCallback(() => {
    timeline.progress(1).kill();
  }, [timeline]);

  useEffect(() => {
    const filter = filterRef.current;
    if (filter !== null) {
      const primitiveValues = { turbulence: 0 };
      const feTurbulance = filter.children[0];
      timeline.eventCallback("onUpdate", () =>
        feTurbulance.setAttribute(
          "baseFrequency",
          String(primitiveValues.turbulence)
        )
      );
      timeline.to(primitiveValues, {
        duration: 0.4,
        opacity: 1,
        startAt: { turbulence: 0.09 },
        turbulence: 0,
      });
    }
  }, [filterRef, timeline]);

  return (
    <>
      <svg className="hidden">
        <defs>
          <filter id="filter-1" ref={filterRef}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="1"
              result="warp"
            />
            <feOffset dx="-90" result="warpOffset" />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warpOffset"
            />
          </filter>
        </defs>
      </svg>
      <ContentText
        $isLight={isLight}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </ContentText>
    </>
  );
};
