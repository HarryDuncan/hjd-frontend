import styled, { keyframes } from "styled-components";
import { IconButton } from "components/buttons/icon-button/IconButton";
import { IconTypes } from "components/buttons/icon-button/IconButton.types";
import { useEffect, useState } from "react";
import { THEME } from "theme/theme";

const MOBILE_BREAKPOINT = THEME.breakpoints.mobile;

const growUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const growDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const MobileNavigatorContainer = styled.div<{ isFloating: boolean }>`
  position: ${({ isFloating }) => (isFloating ? "fixed" : "relative")};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.mono.background};
  border-top: 1px solid ${({ theme }) => theme.colors.mono.lightGray};
  animation: ${({ isFloating }) => (isFloating ? growUp : growDown)} 0.3s
    ease-in-out;
  z-index: 1000;

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

const MobileIconContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

interface MobileNavigatorProps {
  handleExit: () => void;
  onChangeItem: (direction: string) => void;
}

const MobileNavigator = ({
  handleExit,
  onChangeItem,
}: MobileNavigatorProps) => {
  const [isFloating, setIsFloating] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show when scrolling up or at the top, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <MobileNavigatorContainer isFloating={isFloating}>
      <MobileIconContainer>
        <IconButton
          onClick={onChangeItem}
          type={IconTypes.CHEVRON_LEFT}
          hasGesture
        />
      </MobileIconContainer>
      <MobileIconContainer>
        <IconButton onClick={handleExit} type={IconTypes.EXIT} hasGesture />
      </MobileIconContainer>
      <MobileIconContainer>
        <IconButton
          onClick={onChangeItem}
          type={IconTypes.CHEVRON_RIGHT}
          hasGesture
        />
      </MobileIconContainer>
    </MobileNavigatorContainer>
  );
};

export default MobileNavigator;
