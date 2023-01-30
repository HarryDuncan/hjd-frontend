import Link from "next/link";
import React from "react";
import { PageItem } from "../navigation.types";
import {
  NavItem,
  NavItemLabel,
  NavItemLink,
  NavItemList,
} from "./DesktopNavigation.styles";
import { SITE_PAGES } from "../Navigation";

interface DesktopNavProps {
  isNavTop: boolean;
  activeNav: string;
  onSelect: (navItem: string) => void;
}

export const DesktopNav = ({
  onSelect,
  isNavTop,
  activeNav,
}: DesktopNavProps) => {
  const handleLinkClick = (linkName: string) => {
    onSelect(linkName);
  };
  return (
    <NavItemList>
      {SITE_PAGES.map((page: PageItem, index: number) => (
        <NavItem key={index}>
          <NavItemLink
            $isNavTop={isNavTop}
            $isActive={activeNav === page.link}
            onClick={() => handleLinkClick(page.link)}
          >
            <Link href={page.link}>
              <NavItemLabel $isNavTop={isNavTop}>{page.title}</NavItemLabel>
            </Link>
          </NavItemLink>
        </NavItem>
      ))}
    </NavItemList>
  );
};
