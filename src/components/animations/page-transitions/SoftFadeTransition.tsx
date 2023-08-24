import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { SoftFadeContainer } from "./Transitions.styled";

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

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const SoftFadeTransition = ({ children }) => {
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
