import { useEffect, useMemo, useState } from "react";
import { NavTheme, PageItem } from "../navigation.types";
import {
  MobileMenuItems,
  MobileText,
  NavItemContainer,
} from "./MobileNavigation.styles";
import Link from "next/link";
import { CHECKOUT_PAGE, NAV_THEMES, SITE_PAGES } from "../navigation.consts";
import { HamburgerMenu } from "./hamburger-menu/HamburgerMenu";
import { useShopContext } from "views/shop/shop-context/shop.context";

interface MobileNavigationProps {
  navTheme: NavTheme;
}

export const MobileNavigation = ({ navTheme }: MobileNavigationProps) => {
  const [isMenuOpen, updateIsMenuOpen] = useState<boolean>(false);
  const {
    state: { cart },
  } = useShopContext();
  const mobileMenuItems = useMemo(() => {
    if (!cart.length) {
      return SITE_PAGES;
    }
    return [...SITE_PAGES, ...CHECKOUT_PAGE];
  }, [cart]);
  const handleMobileMenuClick = () => {
    updateIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const { body } = document;
    body.style.overflowY = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <MobileMenuItems>
        <HamburgerMenu
          onClick={handleMobileMenuClick}
          isOpen={isMenuOpen}
          isLight={navTheme === NAV_THEMES.LIGHT}
        />
      </MobileMenuItems>

      <NavItemContainer
        $isOpen={isMenuOpen}
        $isLight={navTheme === NAV_THEMES.LIGHT}
      >
        {isMenuOpen && (
          <>
            {mobileMenuItems.map((page: PageItem, _index: number) => (
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
