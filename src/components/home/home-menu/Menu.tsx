import { SITE_PAGES } from "components/navigation/navigation.constants";
import { MenuContainer } from "./HomeMenu.styled";
import { LinkItem } from "../../navigation/desktop/LinkItem";
import { useRef } from "react";

export const Menu = () => {
  const filterRef = useRef(null);
  return (
    <MenuContainer>
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
          filterRef={filterRef}
          filterId="#filter-1"
        />
      ))}
    </MenuContainer>
  );
};
