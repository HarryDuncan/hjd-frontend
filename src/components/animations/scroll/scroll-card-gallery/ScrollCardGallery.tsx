import { useEffect, useRef, useState } from "react";
import { Grid, GridWrap } from "./scrollCard.styles";
import { useScrollCardAnimation } from "./use-scroll-card-animation/useScrollCardAnimation";
import { ConfigurableCard } from "components/card/ConfigurableCard";
import {
  CardAnimationType,
  ScrollGalleryConfig,
} from "./scrollCardGallery.types";

export interface ScrollCardItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface ScrollCardGalleryProps {
  items: ScrollCardItem[];
  scrollType: CardAnimationType;
  config: Partial<ScrollGalleryConfig>;
}
export const ScrollCardGallery = ({
  items,
  scrollType,
  config,
}: ScrollCardGalleryProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const animateOnScroll = useScrollCardAnimation(scrollType, config);
  const [isSet, setIt] = useState<boolean>(false);
  useEffect(() => {
    if (gridRef.current) {
      animateOnScroll(gridRef.current);
      setTimeout(() => {
        setIt(true);
      }, 1500);
    }
  }, [gridRef, animateOnScroll, setIt, isSet]);

  return (
    <Grid ref={gridRef}>
      <GridWrap>
        {items.map(({ id, title, imageUrl }) => (
          <ConfigurableCard
            key={`${id}-${Math.random()}`}
            cardDetails={{ imageUrl, title }}
          />
        ))}
      </GridWrap>
    </Grid>
  );
};
