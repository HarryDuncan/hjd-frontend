import React, { useRef } from "react";
import { SITE_PAGES } from "../navigation.constants";
import { NavTheme } from "../navigation.types";
import { NavItemList } from "./DesktopNavigation.styles";
import { LinkItem } from "./LinkItem";

interface DesktopNavProps {
  navTheme: NavTheme;
}

export const DesktopNav = ({ navTheme }: DesktopNavProps) => {
  const filterRef = useRef<SVGFilterElement | null>(null);
  return (
    <NavItemList>
      <svg className="hidden">
        <defs>
          <filter id="filter-1" ref={filterRef}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="1"
              result="warp"
            />
            <feOffset dx="-90" result="warpOffset" />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warpOffset"
            />
          </filter>
        </defs>
      </svg>
      {SITE_PAGES.map(({ title, link }) => (
        <LinkItem
          key={`${title}`}
          title={title}
          link={link}
          navTheme={navTheme}
          filterRef={filterRef}
          filterId="#filter-1"
        />
      ))}
    </NavItemList>
  );
};

// {SITE_PAGES.map((page: PageItem, _index: number) => (

// ))}
