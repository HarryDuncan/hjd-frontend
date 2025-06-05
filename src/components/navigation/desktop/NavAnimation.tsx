import { AnimatedSVG } from "components/animations/svg-animations/AnimatedSVG";
import { NavAnimationContainer } from "./DesktopNavigation.styles";
import MenuItem from "./animated-svgs/menu-item.svg";

interface NavAnimationProps {
  id: string;
  onClick: () => void;
}
export const NavAnimation = ({ onClick, id }: NavAnimationProps) => {
  const { src } = MenuItem;
  return (
    <NavAnimationContainer>
      <AnimatedSVG id={id} dataUrl={src} onClick={onClick} />
    </NavAnimationContainer>
  );
};
