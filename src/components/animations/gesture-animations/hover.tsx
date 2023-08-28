import { motion } from "framer-motion";

export const HoverGesture = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 0.95,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};
