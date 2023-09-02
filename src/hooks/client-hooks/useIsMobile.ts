import { SCREEN_TYPE, useWindowScreenType } from "./useWindowSize";

export const useIsMobile = () => {
  const windowScreenType = useWindowScreenType();
};
