import Link from "next/link";
import React from "react";
import { useActiveNav } from "../hooks/useActiveNav";
import { NAV_THEMES, SITE_PAGES } from "../navigation.constants";
import { NavTheme, PageItem } from "../navigation.types";
import {
  NavItem,
  NavItemLabel,
  NavItemLink,
  NavItemList,
} from "./DesktopNavigation.styles";

interface DesktopNavProps {
  navTheme: NavTheme;
}

export const DesktopNav = ({ navTheme }: DesktopNavProps) => {
  const { handleNavChange, activeNav } = useActiveNav();

  return (
    <NavItemList>
      {SITE_PAGES.map((page: PageItem, index: number) => (
        <NavItem key={page.title}>
          <NavItemLink
            $isLight={navTheme === NAV_THEMES.DARK}
            $isActive={activeNav === page.link}
            onClick={() => handleNavChange(page.link)}
          >
            <Link href={page.link}>
              <NavItemLabel $isLight={navTheme === NAV_THEMES.DARK}>
                {page.title}
              </NavItemLabel>
            </Link>
          </NavItemLink>
        </NavItem>
      ))}
    </NavItemList>
  );
};
