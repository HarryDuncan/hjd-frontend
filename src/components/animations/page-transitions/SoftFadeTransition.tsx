import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SoftFadeContainer } from "./Transitions.styled";
import { PageTransitionProps } from "./pageTransitions.types";

const variants = {
  fadeIn: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const SoftFadeTransition = ({ children }: PageTransitionProps) => {
  const { asPath } = useRouter();

  return (
    <SoftFadeContainer>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          initial="fadeIn"
          animate="inactive"
          exit="fadeOut"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </SoftFadeContainer>
  );
};

export default SoftFadeTransition;
