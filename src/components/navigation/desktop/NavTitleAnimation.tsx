import { useMemo } from "react";
import { useIsNavTop } from "../hooks/useIsNavTop";
import { TitleAnimationContainer } from "./DesktopNavigation.styles";
import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";

interface NavAnimationProps {
  onClick: () => void;
  isLight?: boolean;
}
export const NavTitleAnimation = ({ onClick, isLight }: NavAnimationProps) => {
  const isNavTop = useIsNavTop();
  const navTitle = useMemo(
    () => (isLight || !isNavTop ? "nav-title-light" : "nav-title"),
    [isLight, isNavTop]
  );
  return (
    <TitleAnimationContainer>
      <AnimatedSVG
        id={navTitle}
        onClick={onClick}
        dataUrl={
          isLight || !isNavTop
            ? "/assets/animated-svgs/animated-title-light.svg"
            : "/assets/animated-svgs/animated-title.svg"
        }
      />
    </TitleAnimationContainer>
  );
};
