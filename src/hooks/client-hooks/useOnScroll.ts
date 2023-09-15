import { useEffect, useState } from "react";

export const useOnScroll = () => {
  const [currentScrollY, setCurrentScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setCurrentScrollY(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setCurrentScrollY]);
  return currentScrollY;
};
