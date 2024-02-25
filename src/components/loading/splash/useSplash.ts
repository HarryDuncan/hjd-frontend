import { useEffect, useState } from "react";

const SPLASH_DISPLAY_TIME = 1500;
export const useSplash = () => {
  const [isSplashShowing, setIsSplashShowing] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSplashShowing(false);
    }, SPLASH_DISPLAY_TIME);
  }, [isSplashShowing]);
  return isSplashShowing;
};
