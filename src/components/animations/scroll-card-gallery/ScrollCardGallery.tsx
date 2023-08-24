import { useEffect, useRef, useState } from "react";
import { Grid, GridWrap } from "./scrollCard.styles";
import { useScrollCardAnimation } from "./useScrollCardAnimation";
import { title } from "process";
import { ConfigurableCard } from "components/card/ConfigurableCard";

export interface ScrollCardItem {
  id: number;
  title: string;
}

interface ScrollCardGalleryProps {
  items: ScrollCardItem[];
  scrollType: string;
}
export const ScrollCardGallery = ({
  items,
  scrollType,
}: ScrollCardGalleryProps) => {
  const gridRef = useRef();
  const animateOnScroll = useScrollCardAnimation(scrollType);
  const [isSet, setIt] = useState<boolean>(false);
  useEffect(() => {
    if (gridRef.current) {
      if (isSet) {
        animateOnScroll(gridRef.current);
      } else {
        setTimeout(() => {
          setIt(true);
        }, 1500);
      }
    }
  }, [gridRef, animateOnScroll, setIt, isSet]);

  const imageUrl = "/images/tech/react.jpg";
  return (
    <Grid ref={gridRef}>
      <GridWrap>
        {items.map((id) => (
          <ConfigurableCard
            key={`${id}-${Math.random()}`}
            cardDetails={{ imageUrl, title }}
          />
        ))}
      </GridWrap>
    </Grid>
  );
};
