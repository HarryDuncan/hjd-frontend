import { LongScroll } from "components/long-scroll/LongScroll";
import { TechHome } from "components/tech/TechHome";
import { TechSection } from "components/tech/TechSection";
import { TechTitle } from "components/tech/TechTitle";
import { TECH_SECTIONS } from "constants/tech.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
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
        {sortedTechData.map(
          (
            { techCardItems, section, sectionText, sectionTitle, sectionData },
            index
          ) => (
            <TechSection
              techCardItems={techCardItems}
              section={section}
              sectionTitle={sectionTitle}
              sectionText={sectionText}
              index={index}
              sectionData={sectionData}
            />
          )
        )}
      </LongScroll>
    </>
  );
};

const useLongScroll = () => {
  const [measureRef, { height }] = useMeasure();
  return { measureRef, height };
};

const getSectionPositionData = () => {
  const sections = Object.values(TECH_SECTIONS);
  const sectionDataObj = {};
  // add one for the title
  const totalSectionCount = sections.length + 1;
  const sectionPercentage = 100 / totalSectionCount;
  sections.forEach((section, index) => {
    const start = Math.floor((index + 1) * sectionPercentage + 1);
    const end = Math.floor((index + 2) * sectionPercentage);
    sectionDataObj[section] = { start, end };
  });
  return sectionDataObj;
};

const useTextContent = () => {
  const textSelection = Object.keys(TECH_SECTIONS);
  const { text } = useContentForPage({
    textSelection,
  });

  return text;
};

const useSortTechData = (tech: TechContent[]) => {
  const textData = useTextContent();
  return useMemo(() => {
    const sections = Object.values(TECH_SECTIONS);
    const sectionData = getSectionPositionData();

    return sections.map((section) => {
      const techCardItems = tech.flatMap(({ id, name, category }) =>
        category && category.toUpperCase() === section
          ? { id, title: name, imageUrl: "" }
          : []
      );
      const { content, title } =
        textData.find(({ title }) => title === section) ?? {};

      return {
        section,
        sectionData: sectionData[section],
        sectionTitle: section,
        sectionText: content ?? "",
        techCardItems,
      };
    });
  }, [tech, textData]);
};

export default Tech;
