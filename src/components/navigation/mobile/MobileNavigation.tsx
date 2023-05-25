import { useEffect, useState } from "react";
import { MenuButton } from "../menu-button/MenuButton";
import { NavTheme, PageItem } from "../navigation.types";
import { MobileText, NavItemContainer } from "./MobileNavigation.styles";
import Link from "next/link";
import { NAV_THEMES, SITE_PAGES } from "../navigation.constants";

interface MobileNavigationProps {
  navTheme: NavTheme;
}

export const MobileNavigation = ({ navTheme }: MobileNavigationProps) => {
  const [isMenuOpen, updateIsMenuOpen] = useState<boolean>(false);

  const handleMobileMenuClick = () => {
    updateIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const { body } = document;
    body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <MenuButton
        onClick={handleMobileMenuClick}
        isOpen={isMenuOpen}
        isLight={navTheme === NAV_THEMES.LIGHT}
      />

      <NavItemContainer
        $isOpen={isMenuOpen}
        $isLight={navTheme === NAV_THEMES.LIGHT}
      >
        {isMenuOpen && (
          <>
            {SITE_PAGES.map((page: PageItem, _index: number) => (
              <MobileText
                $isLight={navTheme === NAV_THEMES.DARK}
                key={`${page.title}-${navTheme}`}
                onClick={handleMobileMenuClick}
              >
                <Link href={page.link}>{page.title}</Link>
              </MobileText>
            ))}
          </>
        )}
      </NavItemContainer>
    </>
  );
};
