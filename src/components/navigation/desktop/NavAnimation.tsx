import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";
import { NavAnimationContainer } from "./DesktopNavigation.styles";

interface NavAnimationProps {
  id: string;
  onClick: () => void;
}
export const NavAnimation = ({ onClick, id }: NavAnimationProps) => {
  return (
    <NavAnimationContainer>
      <AnimatedSVG
        id={id}
        dataUrl="/assets/animated-svgs/menu-item.svg"
        onClick={onClick}
      />
    </NavAnimationContainer>
  );
};
