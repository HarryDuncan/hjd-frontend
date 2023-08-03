import { TechCardBar, TechContentContainer } from "./tech.styles";
import { ConfigurableCard } from "components/card/ConfigurableCard";
import { TechContent } from "models/tech/tech.types";
import { useMemo } from "react";

interface TechContentDisplayProps {
  techContent: TechContent[];
  height: number;
  progress: number;
  scrollPoints: any;
}

export const TechContentDisplay = ({
  techContent,
  height,
  progress,
  scrollPoints,
}: TechContentDisplayProps) => {
  const half = Math.floor(techContent.length / 2);
  const firstHalf = techContent.slice(0, half);
  const secondHalf = techContent.slice(half, techContent.length);
  const sectionProgress = useSectionProgress(progress, scrollPoints);
  return (
    <TechContentContainer>
      <TechCardBar $justify="start">
        {firstHalf.map((techItem) => (
          <ConfigurableCard
            key={techItem.id}
            cardDetails={{ title: techItem.name }}
          />
        ))}
      </TechCardBar>

      <TechCardBar $justify="end">
        {secondHalf.map((techItem) => (
          <ConfigurableCard
            key={`second-half-${techItem.id}`}
            cardDetails={{ title: techItem.name }}
          />
        ))}
      </TechCardBar>
    </TechContentContainer>
  );
};

const useSectionProgress = (progress, { start, end }) =>
  useMemo(() => {
    if (progress < start) {
      return 0;
    } else {
      return Math.min(progress / end, 100);
    }
  }, [progress, start, end]);
