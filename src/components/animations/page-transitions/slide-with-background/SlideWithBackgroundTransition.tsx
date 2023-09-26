import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import { TransitionEffectContainer } from "../Transitions.styled";

import { PageTransitionProps } from "../pageTransitions.types";
import { useCallback, useRef } from "react";
import { Direction } from "utils/moveThroughArray";
import { DefaultScene } from "../../scenes/DefaultScene";

const TRANSITION_DURATION = 0.4;
const TRANSITION_DELAY = 0.3;
const variants = {
  inRight: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
  inLeft: {
    scale: 0.8,
    y: 100,
    x: "-100%",
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
  resetToInitial: {
    transform: "none",
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
  outScrollRight: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
  outScrollLeft: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
};
type BackgroundTransitionProps = PageTransitionProps & {
  direction: Direction;
};

const SlideWithBackgroundTransition = ({
  children,
  direction,
}: BackgroundTransitionProps) => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const divRef = useRef<HTMLDivElement | null>(null);
  const handleAnimationComplete = useCallback(() => {
    setTimeout(() => {
      if (divRef.current !== null) {
        divRef.current.style.transform = "none";
      }
    }, 1500);
  }, [divRef]);
  return (
    <TransitionEffectContainer>
      <DefaultScene />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          ref={divRef}
          className="animation-wrapper"
          key={asPath}
          variants={!shouldReduceMotion ? variants : {}}
          initial={direction === Direction.FORWARD ? "inRight" : "inLeft"}
          animate={["center", "scaleUp"]}
          exit={[
            "scaleDown",
            direction === Direction.FORWARD
              ? "outScrollRight"
              : "outScrollLeft",
          ]}
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionEffectContainer>
  );
};

export default SlideWithBackgroundTransition;
