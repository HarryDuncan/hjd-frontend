import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";
import { TransitionEffectContainer } from "../Transitions.styled";
import { PageTransitionProps } from "../pageTransitions.types";

const TRANSITION_DURATION = 0.4;
const TRANSITION_DELAY = 0.2;
const variants = {
  fullScreen: { scaleY: 1 },
  fadeOut: {
    opacity: 0.0,
    scaleY: 0,
    transition: {
      delay: TRANSITION_DELAY,
      duration: TRANSITION_DURATION * 2,
    },
  },
  hide: {
    scaleY: 0,
    transition: {
      delay: TRANSITION_DELAY + TRANSITION_DURATION * 2,
    },
  },
  slideUp: {
    scaleY: 1.0,
    opacity: 1.0,
    transformOrigin: "bottom center",
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
};

const imageVariants = {
  hide: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1.0,
    transition: {
      duration: TRANSITION_DURATION,
    },
  },
  fadeOut: {
    opacity: 0,
    transition: {
      delay: TRANSITION_DURATION,
    },
  },
};

const OverlayTransition = ({ children }: PageTransitionProps) => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  return (
    <TransitionEffectContainer>
      <AnimatePresence initial={false} mode="wait">
        <motion.div className="overlay-wrapper" key={`${asPath}-OVERLAY`}>
          <motion.div
            className="overlay"
            key={`${asPath}-OVERLAY`}
            variants={!shouldReduceMotion ? variants : {}}
            initial="fullScreen"
            animate={["fadeOut", "hide"]}
            exit={["slideUp"]}
          >
            <motion.img
              key={`${asPath}-logo`}
              variants={!shouldReduceMotion ? imageVariants : {}}
              initial="fadeIn"
              animate={["fadeOut"]}
              exit={["hide"]}
              src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}/logo-light.svg`}
            />
          </motion.div>
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionEffectContainer>
  );
};

export default OverlayTransition;
