import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import {
  BackgroundLayer,
  TransitionEffectContainer,
} from "./Transitions.styled";
import { Direction } from "../../../../utils/helpers/moveThroughArray";
import { PageTransitionProps } from "./pageTransitions.types";
import { useRef } from "react";

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
  const backgroundImage = `${process.env.NEXT_PUBLIC_CONTENT_ROOT}/images/content/banner1.jpg`;
  const divRef = useRef<HTMLElement | null>(null);
  const handleAnimationComplete = () => {
    if (divRef.current) {
      setTimeout(() => {
        divRef.current.style.transform = "none";
      }, 1500);
    }
  };
  return (
    <TransitionEffectContainer>
      <BackgroundLayer $backgroundImage={backgroundImage} />
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
