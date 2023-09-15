import { useEffect, useState } from "react";
import { NAV_SCROLL_BREAKPOINT_PX } from "../navigation.consts";
import { useOnScroll } from "hooks/client-hooks/useOnScroll";

export const useIsNavTop = () => {
  const [isNavTop, updateIsNavTop] = useState<boolean>(true);
  const scrollY = useOnScroll();
  useEffect(() => {
    if (scrollY > NAV_SCROLL_BREAKPOINT_PX) {
      updateIsNavTop(false);
    } else if (scrollY < NAV_SCROLL_BREAKPOINT_PX) {
      updateIsNavTop(true);
    }
  }, [scrollY]);
  return isNavTop;
};
