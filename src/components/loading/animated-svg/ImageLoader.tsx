import { ContentText } from "components/text/Text";
import { ImageLoaderContainer } from "./AnimatedSvg.styles";

export const ImageLoading = () => {
  return (
    <ImageLoaderContainer>
      <object type="image/svg+xml" data="/loader-svg.svg">
        svg-animation
      </object>
      <ContentText>Loading</ContentText>
    </ImageLoaderContainer>
  );
};
