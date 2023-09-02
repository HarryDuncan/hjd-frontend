import { useEffect, useState } from "react";

export const useIsNavTop = () => {
  const [isNavTop, updateIsNavTop] = useState<boolean>(true);
  const handleScroll = () => {
    console.log("t");
    if (window.pageYOffset > 20) {
      updateIsNavTop(false);
    } else if (window.pageYOffset < 20) {
      updateIsNavTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return isNavTop;
};
