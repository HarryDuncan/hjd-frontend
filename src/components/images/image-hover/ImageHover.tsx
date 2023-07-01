import { gsap } from "gsap";
import React, {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  HoverImageContainer,
  DefaultImage,
  ImageWrap,
} from "./ImageHover.styles";
import { ImageHoverConfig } from "./imageHover.types";

const REPETITIONS = 3;
const REPETITION_STAGGER = -0.12;
const INTIAL_SCALE = 1.5;
type Timeline = gsap.core.Timeline;
interface ImageHoverProps {
  imageUrl: string;
  title: string;
  hoverImageConfig: ImageHoverConfig;
}
export const ImageHover = ({
  imageUrl,
  hoverImageConfig,
  title,
}: ImageHoverProps) => {
  const refs = useRefArray(REPETITIONS);
  const hoverTimelineCb = useHoverTimeline();
  const timeLine = useRef<Timeline | null>(null);
  const onMouseEnter = useOnMouseEnter(timeLine);
  const onMouseLeave = useOnMouseLeave(timeLine);
  useEffect(() => {
    timeLine.current = hoverTimelineCb(refs);
  }, [refs, hoverTimelineCb]);

  return (
    <HoverImageContainer
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
      $backgroundImgUrl={imageUrl}
      $imageProps={hoverImageConfig.final}
    >
      {Array.from(Array(REPETITIONS).keys()).map((key, index) =>
        key === 0 ? (
          <ImageWrap key={key}>
            <DefaultImage
              aria-label={title}
              $backgroundImgUrl={imageUrl}
              $imageProps={hoverImageConfig.default}
              ref={refs[index]}
            />
          </ImageWrap>
        ) : (
          <DefaultImage
            key={key}
            aria-label={title}
            $backgroundImgUrl={imageUrl}
            $imageProps={hoverImageConfig.default}
            ref={refs[index]}
          />
        )
      )}
    </HoverImageContainer>
  );
};

const useOnMouseEnter = (hoverTimeline: MutableRefObject<Timeline | null>) =>
  useCallback(() => {
    if (!hoverTimeline.current) return;
    hoverTimeline.current.play();
  }, [hoverTimeline]);

const useOnMouseLeave = (hoverTimeline: MutableRefObject<Timeline | null>) =>
  useCallback(() => {
    if (!hoverTimeline.current) return;
    hoverTimeline.current.reverse();
  }, [hoverTimeline]);

const useRefArray = (
  arrayLength: number
): RefObject<HTMLDivElement>[] | null[] =>
  useMemo(
    () => Array.from(Array(arrayLength).keys()).map(() => React.createRef()),
    [arrayLength]
  );

const useHoverTimeline = () => {
  return useCallback((refs: RefObject<HTMLDivElement>[] | null[]) => {
    if (
      !refs ||
      refs.some(
        (ref: RefObject<HTMLDivElement> | null) => ref?.current === null
      )
    )
      return null;
    const animationProperties = {
      duration: 0.8,
      ease: "power2.inOut",
      stagger: REPETITION_STAGGER,
      scale: 0,
    };
    const firstInnerElementProperties = { scale: INTIAL_SCALE };
    const firstRef = refs[0];
    const second = refs[1];
    const third = refs[2];
    if (firstRef?.current && second?.current && third?.current) {
      const timeline = gsap
        .timeline({ paused: true })
        .set(firstRef?.current, firstInnerElementProperties)
        .to(
          [firstRef.current, second.current, third.current],
          animationProperties,
          0
        );

      timeline.set([firstRef.current, second.current], {
        transformOrigin: "50% 50%",
      });

      return timeline;
    }
    return gsap.timeline({ paused: true });
  }, []);
};
