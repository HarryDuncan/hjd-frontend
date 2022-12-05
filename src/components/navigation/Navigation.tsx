import { useWindowSize, WINDOW_SCREEN_TYPE } from "hooks/useWindowSize";
import React, { useState, useEffect } from "react";
import { DesktopNav } from "./desktop/DesktopNavigation";
import { MobileNavigation } from "./mobile/MobileNavigation";
import {
  NavBackgroundOverlay,
  NavigationContainer,
  NavTitle,
} from "./styledComponents";

export const SITE_PAGES = [
  { title: "Home", link: "/" },
  { title: "About", link: "/bio" },
  // { title: "Mixes", link: "/music" },
  { title: "Art", link: "/art" },
  { title: "Campaigns", link: "/campaigns" },
  { title: "Shop", link: "/shop" },
];

const LARGE_NAV_WINDOW_SIZES = [
  WINDOW_SCREEN_TYPE.DESKTOP,
  WINDOW_SCREEN_TYPE.WIDE_SCREEN,
];

const Navigation = () => {
  const [activeNav, updateActiveNav] = useState<string>(
    window.location.pathname
  );

  const [isNavTop, updateIsNavTop] = useState<boolean>(true);

  const isHome = (pathName: string) => {
    const paths = SITE_PAGES.map((page) => page.link);
    paths.splice(0, 1);
    return !paths.includes(pathName);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      updateIsNavTop(false);
    } else if (window.pageYOffset < 20) {
      updateIsNavTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleNavChange = (link: string) => {
    updateActiveNav(link);
  };

  const windowSize = useWindowSize();

  // Return is site down nav
  //   if (isSiteDown()) {
  //     return (
  //       <NavigationContainer>
  //         <HomeNavOverlay isDark={true} />
  //         <NavTitle isDark={false}>Harry J Dee</NavTitle>
  //         <SiteDownBar>
  //           <Blurb isLight={true}>
  //             Sorry. We are down for maintenance. Please Come back a bit later
  //           </Blurb>
  //         </SiteDownBar>
  //       </NavigationContainer>
  //     );
  //   }

  const isNavDark = false;
  return (
    <NavigationContainer>
      <NavBackgroundOverlay $isOpen={!isNavTop || isNavDark} />
      <NavTitle $isLight={isNavTop && !isNavDark}>HARRY J DEE</NavTitle>
      {LARGE_NAV_WINDOW_SIZES.includes(windowSize) ? (
        <DesktopNav
          isNavTop={isNavTop}
          activeNav={activeNav}
          onSelect={handleNavChange}
        />
      ) : (
        <MobileNavigation isNavTop={isNavTop} onSelect={handleNavChange} />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
