import { LongScroll } from "components/long-scroll/LongScroll";
import { TechHome } from "components/tech/TechHome";
import { TechSection } from "components/tech/tech-section/TechSection";
import { TechTitle } from "components/tech/TechTitle";
import { TECH_SECTIONS } from "constants/tech.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import { useTechData } from "hooks/tech/useTechContent";
import { TechContent } from "models/tech/tech.types";
import { NextPage } from "next";
import { Ref, useEffect, useMemo, useState } from "react";
import { useMeasure } from "react-use";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { useLoadPageOnTop } from "hooks/client-hooks/useLoadPageOnTop";
import { useOnScroll } from "hooks/client-hooks/useOnScroll";

const Tech: NextPage = () => {
  const {
    techData: { tech },
  } = useTechData();
  const sortedTechData = useSortTechData(tech ?? []);
  const { height, measureRef } = useLongScroll();
  useSetWindowState();
  useLoadPageOnTop();
  const sectionLoadingStatus = useLoadSectionsOnScroll(height);
  return (
    <>
      <TechHome contentHeight={height} />
      <LongScroll ref={measureRef as Ref<HTMLDivElement>}>
        <TechTitle />
        {sortedTechData.map(
          (
            { techCardItems, section, sectionText, sectionTitle, sectionData },
            index
          ) => (
            <TechSection
              key={`tech-section-${section}`}
              techCardItems={techCardItems}
              sectionTitle={sectionTitle}
              sectionText={sectionText}
              index={index}
              sectionData={sectionData}
              loadData={sectionLoadingStatus[section]}
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
  const sectionData: Record<string, { start: number; end: number }> = {};
  const totalSectionCount = sections.length + 1;
  const sectionPercentage = 100 / totalSectionCount;
  sections.forEach((section, index) => {
    const start = Math.floor((index + 1) * sectionPercentage + 1);
    const end = Math.floor((index + 2) * sectionPercentage);
    sectionData[section] = { start, end };
  });
  return { sectionData, totalSectionCount };
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
    const { sectionData } = getSectionPositionData();

    return sections.map((section) => {
      const techCardItems = tech.flatMap(({ id, name, category, image }) =>
        category && category.toUpperCase() === section
          ? {
              id,
              title: name,
              imageUrl: `${process.env.NEXT_PUBLIC_CONTENT_ROOT}/images/tech/${image}`,
            }
          : []
      );
      const { content } = textData.find(({ title }) => title === section) ?? {};

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

const initialState = Object.keys(TECH_SECTIONS).reduce(
  (previous, section) => ({
    ...previous,
    [section]: false,
  }),
  {}
);

const useLoadSectionsOnScroll = (scrollContainerHeight: number) => {
  const [sectionLoadingData, setSectionLoadingData] =
    useState<Record<string, boolean>>(initialState);
  const scrollY = useOnScroll();
  useEffect(() => {
    const { sectionData, totalSectionCount } = getSectionPositionData();
    const updatedSectionData = Object.keys(sectionLoadingData).reduce(
      (previous, key) => {
        if (!sectionLoadingData[key]) {
          const sectionHeight = scrollContainerHeight / totalSectionCount;
          const sectionStart =
            (sectionData[key].start * scrollContainerHeight) / 100;
          if (scrollY > sectionStart - sectionHeight) {
            return {
              ...previous,
              [key]: true,
            };
          }
        }
        return {
          ...previous,
          [key]: sectionLoadingData[key],
        };
      },
      {}
    );
    setSectionLoadingData(updatedSectionData);
  }, [sectionLoadingData, scrollY]);

  return sectionLoadingData;
};
export default Tech;
