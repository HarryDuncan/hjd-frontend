import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverTitleProps {
  title: string;
  onClick?: () => void;
}
export const HoverTitle = ({ title, onClick }: HoverTitleProps) => {
  return (
    <motion.h1
      whileHover={{
        scale: 0.95,
      }}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.h1>
  );
};
