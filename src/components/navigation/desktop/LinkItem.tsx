import { gsap } from "gsap";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { NavItem, NavItemLabel, NavItemLink } from "./DesktopNavigation.styles";
import { useActiveNav } from "../hooks/useActiveNav";
import { NavTheme } from "../navigation.types";
import { NAV_THEMES } from "../navigation.constants";
import { useHandleRouting } from "hooks/useHandleRouting";

interface LinkItemProps {
  title: string;
  link: string;
  filterId: string;
  navTheme: NavTheme;
}

interface AnimationOptions {
  text: boolean;
  line: boolean;
  filterId: string;
  filterRef: any;
}

export const LinkItem = ({
  title,
  link,
  filterId,
  filterRef,
  navTheme,
}: LinkItemProps) => {
  const animationOptions: AnimationOptions = useMemo(
    () => ({
      text: false,
      line: true,
      filterId,
    }),
    [filterId]
  );

  const lineRef = useRef(null);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        paused: true,
        onStart: () => {
          if (animationOptions.line && lineRef?.current) {
            lineRef.current.style.filter = `url(${animationOptions.filterId})`;
          }
        },
        onComplete: () => {
          if (animationOptions.line && lineRef?.current) {
            lineRef.current.style.filter = "none";
          }
        },
      }),
    [animationOptions, lineRef]
  );

  const onMouseEnter = useCallback(() => {
    timeline.restart();
  }, [timeline]);
  const onMouseLeave = useCallback(() => {
    timeline.progress(1).kill();
  }, [timeline]);

  useEffect(() => {
    const filter = filterRef.current;
    if (filter !== null) {
      const primitiveValues = { turbulence: 0 };
      const feTurbulance = filter.children[0];
      timeline.eventCallback("onUpdate", () =>
        feTurbulance.setAttribute("baseFrequency", primitiveValues.turbulence)
      );
      timeline.to(primitiveValues, {
        duration: 0.4,
        opacity: 1,
        startAt: { turbulence: 0.09 },
        turbulence: 0,
      });
    }
  }, [filterRef, timeline]);

  const isLight = useIsNavLight(navTheme);
  const { isActive, onLinkClick } = useIsLinkActive(link);
  return (
    <NavItem key={title}>
      <NavItemLink
        $isLight={isLight}
        $isActive={isActive}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onLinkClick}
      >
        <NavItemLabel $isLight={isLight}>{title}</NavItemLabel>
        <div className="line" ref={lineRef} />
      </NavItemLink>
    </NavItem>
  );
};

const useIsLinkActive = (link: string) => {
  const handleRouting = useHandleRouting(link);
  const { activeNav, handleNavChange } = useActiveNav();
  const isActive = useMemo(() => link === activeNav, [link, activeNav]);
  const onLinkClick = useCallback(() => {
    handleNavChange(link);
    handleRouting();
  }, [link, handleNavChange, handleRouting]);
  return { isActive, onLinkClick };
};
const useIsNavLight = (navTheme: NavTheme) => {
  return useMemo(() => navTheme === NAV_THEMES.DARK, [navTheme]);
};
