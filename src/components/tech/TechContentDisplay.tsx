import { TechCardBar, TechContentContainer } from "./tech.styles";
import { ConfigurableCard } from "components/card/ConfigurableCard";
import { TechContent } from "models/tech/tech.types";
import { useMemo } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";

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
      <Flipper flipKey={sectionProgress}>
        <Flipped flipId="box" spring="stiff">
          <TechCardBar $justify="start" $translate={sectionProgress}>
            {firstHalf.map((techItem) => (
              <ConfigurableCard
                key={techItem.id}
                cardDetails={{ title: techItem.name }}
              />
            ))}
          </TechCardBar>
        </Flipped>
      </Flipper>

      <TechCardBar $justify="end" $translate={sectionProgress}>
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

const useSectionProgress = (
  progress: number,
  { start, end }: { start: number; end: number }
) =>
  useMemo(() => {
    if (progress < start) {
      return 0;
    } else {
      return Math.min(progress / end, 100);
    }
  }, [progress, start, end]);
