import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import {
  BackgroundLayer,
  TransitionEffectContainer,
} from "./Transitions.styled";
import { Direction } from "../../../../utils/helpers/moveThroughArray";
import { PageTransitionProps } from "./pageTransitions.types";

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
  return (
    <TransitionEffectContainer>
      <BackgroundLayer $backgroundImage={backgroundImage} />
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={!shouldReduceMotion ? variants : null}
          initial={direction === Direction.FORWARD ? "inRight" : "inLeft"}
          animate={["center", "scaleUp"]}
          exit={[
            "scaleDown",
            direction === Direction.FORWARD
              ? "outScrollRight"
              : "outScrollLeft",
          ]}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionEffectContainer>
  );
};

export default SlideWithBackgroundTransition;
