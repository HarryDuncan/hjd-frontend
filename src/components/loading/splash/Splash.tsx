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
        <SplashImage
          src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}logo-light.svg`}
        />
      </DarkOverlay>
      <SplashImage
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}logo-dark.svg`}
      />
    </SplashContainer>
  );
};
