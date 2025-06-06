import { MainTitle } from "components/text/Text";
import { ReactNode } from "react";
import { ImageHover } from "../image-hover";
import { ParallaxImageContainer } from "./ParallaxImage.styles";
import { ImageHoverConfig } from "../image-hover/imageHover.types";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  hoverImageConfig: ImageHoverConfig;
  mainTitle?: string;
  imageHeightPx?: number;
  mobileHeightPx?: number;
  children?: ReactNode;
}

export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  hoverImageConfig,
  mainTitle,
  imageHeightPx = 250,
  mobileHeightPx,
  children,
}: ParallaxImageProps) => (
  <ParallaxImageContainer
    $height={imageHeightPx}
    $mobileHeight={mobileHeightPx}
  >
    {mainTitle && <MainTitle $isLight>{mainTitle}</MainTitle>}
    {children && children}
    <ImageHover
      hoverImageConfig={hoverImageConfig}
      imageUrl={imageUrl}
      title={imageTitle}
    />
  </ParallaxImageContainer>
);
