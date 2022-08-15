import { gsap } from "gsap";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { ImageContainer, ImageElement, ImageWrap } from "./ImageHover.styles";

interface ImageHoverProps {
  imageUrl: string;
  title: string;
}

const REPETITIONS = 3;
const REPETITION_STAGGER = -0.12;
const INTIAL_SCALE = 1.5;
type Timeline = any;
export const ImageHover = ({ imageUrl, title }: ImageHoverProps) => {
  const refs = useRefArray(REPETITIONS);
  const hoverTimelineCb = useHoverTimeline();
  const timeLine = useRef<Timeline | null>(null);
  const onMouseEnter = useOnMouseEnter(timeLine);
  const onMouseLeave = useOnMouseLeave(timeLine);
  useEffect(() => {
    timeLine.current = hoverTimelineCb(refs);
  }, []);
  return (
    <ImageContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      $backgroundImgUrl={imageUrl}
    >
      {Array.from(Array(REPETITIONS).keys()).map((key, index) =>
        key === 0 ? (
          <ImageWrap>
            <ImageElement $backgroundImgUrl={imageUrl} ref={refs[index]} />
          </ImageWrap>
        ) : (
          <ImageElement $backgroundImgUrl={imageUrl} ref={refs[index]} />
        )
      )}
    </ImageContainer>
  );
};

const useOnMouseEnter = (hoverTimeline: any) =>
  useCallback(() => {
    if (!hoverTimeline.current) return;
    hoverTimeline.current.play();
  }, [hoverTimeline]);

const useOnMouseLeave = (hoverTimeline: any) =>
  useCallback(() => {
    if (!hoverTimeline.current) return;
    hoverTimeline.current.reverse();
  }, [hoverTimeline]);

const useRefArray = (arrayLength: number) =>
  useMemo(
    () => Array.from(Array(arrayLength).keys()).map(() => React.createRef()),
    [arrayLength]
  );

const useHoverTimeline = () => {
  return useCallback((refs: any) => {
    if (!refs || refs.some((ref: any) => ref.current === null)) return null;
    const property = "scale";
    let animationProperties = {
      duration: 0.8,
      ease: "power2.inOut",
      stagger: REPETITION_STAGGER,
      scale: 0,
    };
    const firstInnerElementProperties = { scale: INTIAL_SCALE };

    const timeline = gsap
      .timeline({ paused: true })
      .set(refs[0].current, firstInnerElementProperties)
      .to(
        [refs[0].current, refs[1].current, refs[2].current],
        animationProperties,
        0
      );

    timeline.set([refs[0].current, refs[1].current], {
      transformOrigin: "50% 50%",
    });

    return timeline;
  }, []);
};
