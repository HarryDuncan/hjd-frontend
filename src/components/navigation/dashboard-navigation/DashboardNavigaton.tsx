import React, { useRef } from "react";
import { NavItemList } from "../desktop/DesktopNavigation.styles";
import { LinkItem } from "../desktop/LinkItem";
import { DASHBOARD_PAGES } from "../navigation.consts";

export const DashboardNavigation = () => {
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
      {DASHBOARD_PAGES.map(({ title, link }) => (
        <LinkItem
          key={`${title}`}
          title={title}
          link={link}
          navTheme="LIGHT"
          filterRef={filterRef}
          filterId="#filter-1"
        />
      ))}
    </NavItemList>
  );
};
