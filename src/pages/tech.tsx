import { ScrollCardGallery } from "components/animations/scroll-card-gallery/ScrollCardGallery";
import { CARD_GALLERY_TYPE } from "components/animations/scroll-card-gallery/scroll-card-gallery.consts";
import { LongScroll } from "components/long-scroll/LongScroll";
import { TechHome } from "components/tech/TechHome";
import { TechTitle } from "components/tech/TechTitle";
import { TECH_SECTIONS } from "constants/tech.constants";
import { useTechData } from "hooks/tech/useTechContent";
import { TechContent } from "models/tech/tech.types";
import { NextPage } from "next";
import { useMemo } from "react";
import { useMeasure } from "react-use";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";

const Tech: NextPage = () => {
  const {
    techData: { tech },
  } = useTechData();
  const sortedTechData = useSortTechData(tech ?? []);
  const { height, measureRef } = useLongScroll();
  useSetWindowState();
  return (
    <>
      <TechHome contentHeight={height} />
      <LongScroll ref={measureRef}>
        <TechTitle />
        {sortedTechData.map(({ techCardItems }, index) => (
          <ScrollCardGallery
            items={techCardItems}
            scrollType={
              index % 2 === 0
                ? CARD_GALLERY_TYPE.WAVE_LEFT
                : CARD_GALLERY_TYPE.WAVE_RIGHT
            }
          />
        ))}
      </LongScroll>
    </>
  );
};

const useLongScroll = () => {
  const [measureRef, { height }] = useMeasure();
  return { measureRef, height };
};

const useSortTechData = (tech: TechContent[]) =>
  useMemo(() => {
    const sections = Object.values(TECH_SECTIONS);
    return sections.map((section) => {
      const techCardItems = tech.flatMap(({ id, name, category }) =>
        category.toUpperCase() === section
          ? { id, title: name, imageUrl: "" }
          : []
      );
      return {
        techCardItems,
      };
    });
  }, [tech]);

export default Tech;
