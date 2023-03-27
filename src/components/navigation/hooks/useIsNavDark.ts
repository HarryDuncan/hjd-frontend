import { useRouter } from "next/router";
import { SITE_PAGES } from "../navigation.constants";

export const useIsNavDark = () => {
  const router = useRouter();
  const currentRoute = router.route;
  const currentSitePage = SITE_PAGES.find(({ link }) => link === currentRoute);
  return currentSitePage?.isNavDark ?? false;
};
