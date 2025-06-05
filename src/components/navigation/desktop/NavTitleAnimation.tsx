import { useMemo } from "react";
import { useIsNavTop } from "../hooks/useIsNavTop";
import { TitleAnimationContainer } from "./DesktopNavigation.styles";
import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";
import NavLight from "./animated-svgs/animated-title-light.svg";
import NavDark from "./animated-svgs/animated-title.svg";

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
  const navTitleSrc = useMemo(() => {
    return isLight || !isNavTop ? NavLight.src : NavDark.src;
  }, [isLight, isNavTop]);
  return (
    <TitleAnimationContainer>
      <AnimatedSVG id={navTitle} onClick={onClick} dataUrl={navTitleSrc} />
    </TitleAnimationContainer>
  );
};
