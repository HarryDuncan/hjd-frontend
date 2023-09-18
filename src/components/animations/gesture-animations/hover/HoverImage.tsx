import { motion } from "framer-motion";

interface HoverImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export const HoverImage = ({ src, alt, onClick }: HoverImageProps) => {
  const imgSrc = `${process.env.NEXT_PUBLIC_CONTENT_ROOT}${src}`;
  return (
    <motion.img
      whileHover={{
        scale: 0.75,
      }}
      src={imgSrc}
      alt={alt}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    />
  );
};
