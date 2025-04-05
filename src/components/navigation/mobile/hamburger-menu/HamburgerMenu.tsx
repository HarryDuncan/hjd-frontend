import {
  useClientWindowSize,
  WINDOW_TYPE,
} from "hooks/client-hooks/useClientWindowSize";
import { HamburgerMenuContainer } from "./HamburgerMenu.styles";

interface HamburgerMenuProps {
  onClick: () => void;
  isLight: boolean;
  isOpen: boolean;
}

export const HamburgerMenu = ({
  onClick,
  isLight,
  isOpen,
}: HamburgerMenuProps) => {
  const isActive = isOpen ? "active" : "";
  const showAsLight = isLight ? "" : "menu-light";
  const windowSize = useClientWindowSize();
  return (
    <HamburgerMenuContainer>
      <svg
        className={`ham hamRotate ${isActive} ${showAsLight}`}
        viewBox="0 0 100 100"
        width={windowSize === WINDOW_TYPE.TABLET ? "140" : "100"}
        onClick={onClick}
      >
        <path
          className="line top"
          d="m 70,38 h -40 c 0,0 -1.5,-7.149796 -8.5,6.8 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,52.5 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-5.8 0,-8.649796 -5.5,-8.5 -8.5,-8.5 h -20 v 20"
          strokeWidth="25"
        />
      </svg>
    </HamburgerMenuContainer>
  );
};
