import { Card, CardDetails } from "components/card/Card";
import { CardGalleryContainer } from "./styledComponents";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMeasure } from "react-use";
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

  const onScroll = useCallback(
    (_event: Event) => {
      const { pageYOffset } = window;
      if (pageYOffset >= height) {
        setItemsDisplayed((i) => i + Number(loadMoreProps?.loadMoreSize ?? 0));
      }
    },
    [loadMoreProps, height]
  );
  useEffect(() => {
    // add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return {
    displayedItems: items.slice(0, itemsDisplayed),
    scrollableContainerRef: measureRef,
  };
};

export default CardGallery;
