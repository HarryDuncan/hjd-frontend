import { useEffect, useState } from "react";
import { MenuButton } from "../menu-button/MenuButton";
import { PageItem } from "../navigation.types";
import { MobileText, NavItemContainer } from "./MobileNavigation.styles";
import { SITE_PAGES } from "./../Navigation";
import Link from "next/link";

interface MobileNavigationProps {
  isNavTop: boolean;
  onSelect: (link: string) => void;
}

const REDIRECT_TIMEOUT = 500;
export const MobileNavigation = ({
  isNavTop,
  onSelect,
}: MobileNavigationProps) => {
  const [isMenuOpen, updateIsMenuOpen] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<string | undefined>();
  const handleMobileMenuClick = () => {
    updateIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    updateIsMenuOpen(false);
    onSelect(link);
    setTimeout(() => {
      setRedirect(link);
    }, REDIRECT_TIMEOUT);
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("no-scroll", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      <MenuButton
        onClick={handleMobileMenuClick}
        isOpen={isMenuOpen}
        isDark={isNavTop}
      />

      <NavItemContainer $isOpen={isMenuOpen} $isDark={!isNavTop}>
        {isMenuOpen && (
          <>
            {SITE_PAGES.map((page: PageItem, index: number) => (
              <MobileText
                $isDark={isNavTop}
                key={index}
                onClick={() => handleLinkClick(page.link)}
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
