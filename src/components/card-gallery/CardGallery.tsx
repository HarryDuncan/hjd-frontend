import { Card, CardDetails } from "components/card/Card";
import { CardGalleryContainer } from "./styledComponents";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMeasure, useWindowScroll } from "react-use";
import { UseMeasureRef } from "react-use/lib/useMeasure";

export interface LoadMoreProps {
  initialLoadSize: number;
  loadMoreSize: number;
}
interface CardGalleryProps {
  items: CardDetails[];
  onClick: (_id: number | string) => void;
  loadMoreProps?: LoadMoreProps;
}

const CardGallery = ({ items, onClick, loadMoreProps }: CardGalleryProps) => {
  const cardClicked = (id: number | string | undefined) => {
    if (onClick && id) {
      onClick(id);
    }
  };

  const { displayedItems, scrollableContainerRef } = useLoadMoreOnScroll(
    items,
    loadMoreProps
  );
  return (
    <CardGalleryContainer
      ref={
        scrollableContainerRef as unknown as MutableRefObject<HTMLDivElement | null>
      }
    >
      {displayedItems.flatMap(({ id, title, imageUrl, footer }) => {
        if (!id) return [];
        return (
          <Card
            key={`card-${id}`}
            cardDetails={{ title, imageUrl, footer }}
            onClick={() => cardClicked(id)}
          />
        );
      })}
    </CardGalleryContainer>
  );
};

const useLoadMoreOnScroll = (
  items: CardDetails[],
  loadMoreProps?: LoadMoreProps
): {
  displayedItems: CardDetails[];
  scrollableContainerRef: UseMeasureRef<Element>;
} => {
  const [measureRef, { height }] = useMeasure();
  const [itemsDisplayed, setItemsDisplayed] = useState<number>(
    loadMoreProps?.initialLoadSize ?? items.length
  );
  const { y } = useWindowScroll();

  useEffect(() => {
    if (y >= height - 200) {
      setItemsDisplayed((i) => i + Number(loadMoreProps?.loadMoreSize ?? 0));
    }
  }, [y]);

  return {
    displayedItems: items.slice(0, itemsDisplayed),
    scrollableContainerRef: measureRef,
  };
};

export default CardGallery;
