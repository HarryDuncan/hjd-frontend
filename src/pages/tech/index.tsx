import { LongScroll } from "components/long-scroll/LongScroll";
import { TechSection } from "views/tech/tech-section/TechSection";
import { TECH_IMAGE_PATH, TECH_SECTIONS } from "views/tech/tech.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import { useTechData } from "hooks/tech/useTechContent";
import { TechContent } from "models/tech/tech.types";
import { NextPage } from "next";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { useLoadPageOnTop } from "hooks/client-hooks/useLoadPageOnTop";
import { useOnScroll } from "hooks/client-hooks/useOnScroll";
import { TechHome } from "views/tech/TechHome";
import { TechTitle } from "views/tech/TechTitle";
import Head from "next/head";
import FullScreenLayout from "layout/FullScreenLayout";

const Tech: NextPage = () => {
  const {
    techData: { tech },
  } = useTechData();
  const sortedTechData = useSortTechData(tech);
  const { height, longScrollRef } = useLongScroll();
  useSetWindowState();
  useLoadPageOnTop();
  const sectionLoadingStatus = useLoadSectionsOnScroll(height);
  return (
    <>
      <Head>
        <title>Tech</title>
        <meta
          name="Harry J Dee Tech"
          content="The tech stack of software engineer Harry Duncan"
          key="desc"
        />
      </Head>
      <FullScreenLayout showNav={false}>
        <TechHome contentHeight={height} />
        <LongScroll ref={longScrollRef}>
          <TechTitle />
          {sortedTechData.map(
            (
              {
                techCardItems,
                section,
                sectionText,
                sectionTitle,
                sectionData,
              },
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
      </FullScreenLayout>
    </>
  );
};

const useLongScroll = () => {
  const longScrollRef = useRef<HTMLDivElement | null>(null);
  const height = useMemo(
    () => longScrollRef.current?.clientHeight ?? 0,
    [longScrollRef.current]
  );

  return { longScrollRef, height };
};

const getSectionPositionData = () => {
  const sectionData: Record<string, { start: number; end: number }> = {};
  const totalSectionCount = TECH_SECTIONS.length + 1;
  const sectionPercentage = 100 / totalSectionCount;
  TECH_SECTIONS.forEach((section, index) => {
    const start = Math.floor((index + 1) * sectionPercentage + 1);
    const end = Math.floor((index + 2) * sectionPercentage);
    sectionData[section] = { start, end };
  });
  return { sectionData, totalSectionCount };
};

const useSortTechData = (tech: TechContent[]) => {
  const { text } = useContentForPage({
    textSelection: TECH_SECTIONS,
  });
  return useMemo(() => {
    const { sectionData } = getSectionPositionData();
    return TECH_SECTIONS.map((section) => {
      const techCardItems = tech.flatMap(({ id, name, category, image }) =>
        category && category.toUpperCase() === section
          ? {
              id,
              title: name,
              imageUrl: `${TECH_IMAGE_PATH}${image}`,
            }
          : []
      );
      const { content } = text.find(({ title }) => title === section) ?? {};

      return {
        section,
        sectionData: sectionData[section],
        sectionTitle: section,
        sectionText: content ?? "",
        techCardItems,
      };
    });
  }, [tech, text]);
};

const initialState = TECH_SECTIONS.reduce(
  (previous, section) => ({
    ...previous,
    [section]: false,
  }),
  {}
);

const useLoadSectionsOnScroll = (scrollContainerHeight: number) => {
  const [sectionLoadingData, setSectionLoadingData] =
    useState<Record<string, boolean>>(initialState);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);
  const scrollY = useOnScroll();
  useEffect(() => {
    if (scrollY > prevScrollY + 10) {
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
      setPrevScrollY(scrollY);
      setSectionLoadingData(updatedSectionData);
    }
  }, [sectionLoadingData, scrollY, prevScrollY]);

  return sectionLoadingData;
};
export default Tech;
