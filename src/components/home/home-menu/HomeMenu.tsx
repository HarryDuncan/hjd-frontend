import { useMemo } from "react";
import {
  HomeMenuContainer,
  TileContainer,
  TileImage,
  TileLine,
} from "./HomeMenu.styled";
import { Menu } from "./Menu";

interface HomePageConfig {
  images: any[];
}
interface HomeMenuProps {
  config: HomePageConfig;
}
export const HomeMenu = ({ config }: HomeMenuProps) => {
  const backgroundImages = useHomeMenuImages(config.images);
  return (
    <HomeMenuContainer>
      <TileContainer>
        <TileImages images={backgroundImages} startIndex={0} />
        <TileImages images={backgroundImages} startIndex={3} />
        <TileImages images={backgroundImages} startIndex={6} />
      </TileContainer>
      <Menu />
    </HomeMenuContainer>
  );
};

interface TileImagesProps {
  images: string[];
  startIndex: number;
}
const TileImages = ({ images, startIndex }: TileImagesProps) => {
  const displayedImages = images.flatMap((item, index) =>
    index >= startIndex && index < startIndex + 3 ? item : []
  );
  return (
    <TileLine>
      <TileImage $backgroundUrl={displayedImages[0]} />
      <TileImage $backgroundUrl={displayedImages[1]} />
      <TileImage $backgroundUrl={displayedImages[2]} $large />
      <TileImage $backgroundUrl={displayedImages[0]} />
      <TileImage $backgroundUrl={displayedImages[1]} />
      <TileImage $backgroundUrl={displayedImages[2]} $large />
    </TileLine>
  );
};

const useHomeMenuImages = (images) => {
  const imageArray = useMemo(
    () =>
      new Array(9)
        .fill("")
        .map(
          (_item, index) =>
            `${process.env.NEXT_PUBLIC_CONTENT_ROOT}${images[index].url}`
        ),
    [images]
  );
  return imageArray;
};
