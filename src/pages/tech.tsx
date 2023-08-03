import { LongScroll } from "components/long-scroll/LongScroll";
import { TechContentDisplay } from "components/tech/TechContentDisplay";
import { TechHome } from "components/tech/TechHome";
import { TechTitle } from "components/tech/TechTitle";
import {
  TECH_SECTIONS,
  TECH_SECTION_SCROLL_CONFIGS,
} from "constants/tech.constants";
import { useTechData } from "hooks/tech/useTechContent";
import { TechContent } from "models/tech/tech.types";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { useMeasure, useWindowScroll } from "react-use";
import { useSetWindowState } from "visual/compat/window-state/useSetWindowState";
import { useWindowState } from "visual/compat/window-state/windowStateProvider";

const Tech: NextPage = () => {
  const {
    techData: { tech },
  } = useTechData();
  const sortedTechData = useSortTechData(tech ?? []);
  const { height, measureRef } = useLongScroll();
  const progress = useScrollProgress(height, measureRef);
  useSetWindowState();
  return (
    <>
      <TechHome contentHeight={height} />
      <LongScroll ref={measureRef}>
        <TechTitle />
        {sortedTechData.map(({ section, tech, scrollPoints }, index) => (
          <TechContentDisplay
            height={height}
            key={`${section}-${index}`}
            techContent={tech}
            scrollPoints={scrollPoints}
            progress={progress}
          />
        ))}
      </LongScroll>
    </>
  );
};

const useLongScroll = () => {
  const [height, setHeight] = useState<number>(0);
  const [measureRef, { height: divHeight }] = useMeasure();

  useEffect(() => {
    if (divHeight !== 0) {
      setHeight(divHeight);
    }
  }, [divHeight, setHeight]);
  return { measureRef, height };
};

const useSortTechData = (tech: TechContent[]) =>
  useMemo(() => {
    const sections = Object.values(TECH_SECTIONS);
    return sections.map((section) => ({
      section,
      tech,
      scrollPoints: TECH_SECTION_SCROLL_CONFIGS[section],
    }));
  }, [tech]);

const useScrollProgress = (height: number, ref: any) => {
  const { y } = useWindowScroll(ref);
  const {
    state: {
      windowSize: { height: innerHeight },
    },
  } = useWindowState();
  return useMemo(
    () => ((y + innerHeight) / height) * 100,
    [y, innerHeight, height]
  );
};

export default Tech;
