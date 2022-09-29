import {
  DarkOverlay,
  Overlay,
  SplashContainer,
  SplashImage,
} from "./Splash.styles";

interface SplashProps {
  isVisible: boolean;
}

export const Splash = ({ isVisible }: SplashProps) => {
  if (!isVisible) return null;
  return (
    <SplashContainer>
      <Overlay />
      <DarkOverlay>
        <SplashImage src="/logo-light.svg" />
      </DarkOverlay>
      <SplashImage src="/logo-dark.svg" />
    </SplashContainer>
  );
};
