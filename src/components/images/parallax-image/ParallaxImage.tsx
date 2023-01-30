import { MainTitle } from "components/styled-components/Text";
import { ReactNode } from "react";
import { ImageHover } from "../image-hover";
import { ImageHoverConfig } from "../image-hover/ImageHover";
import { ParallaxImageContainer } from "./styledComponents";

interface ParallaxImageProps {
  imageUrl: string;
  imageTitle: string;
  hoverImageConfig: ImageHoverConfig;
  mainTitle?: string;
  imageHeightPx?: number;
  children?: ReactNode;
}

export const ParallaxImage = ({
  imageUrl = "",
  imageTitle = "img",
  hoverImageConfig,
  mainTitle,
  imageHeightPx = 250,
  children,
}: ParallaxImageProps) => (
  <ParallaxImageContainer $height={imageHeightPx}>
    {mainTitle && <MainTitle $isLight>{mainTitle}</MainTitle>}
    {children && children}
    <ImageHover
      hoverImageConfig={hoverImageConfig}
      imageUrl={imageUrl}
      title={imageTitle}
    />
  </ParallaxImageContainer>
);
