import { Card, CardDetails } from "components/card/Card";
import { CardGalleryContainer } from "./styledComponents";
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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
    <CardGalleryContainer ref={scrollableContainerRef}>
      {displayedItems.map(({ id, title, imageUrl, footer }) => (
        <Card
          key={`card-${id}`}
          cardDetails={{ title, imageUrl, footer }}
          onClick={() => cardClicked(id)}
        />
      ))}
    </CardGalleryContainer>
  );
};

const useLoadMoreOnScroll = (
  items: CardDetails[],
  loadMoreProps?: LoadMoreProps
): {
  displayedItems: CardDetails[];
  scrollableContainerRef: MutableRefObject<any>;
} => {
  const scrollableContainerRef = useRef();
  const [itemsDisplayed, setItemsDisplayed] = useState<number>(
    loadMoreProps?.initialLoadSize ?? items.length
  );
  const [scrollBreakPoint, setScrollBreakPoint] = useState<number>(200);
  const onScroll = useCallback((_event: any) => {
    const { pageYOffset } = window;
    if (pageYOffset > scrollBreakPoint) {
      setScrollBreakPoint(scrollBreakPoint + 200);
      setItemsDisplayed(
        itemsDisplayed + Number(loadMoreProps?.loadMoreSize ?? 0)
      );
    }
  }, []);
  useEffect(() => {
    // add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    displayedItems: items.slice(0, itemsDisplayed),
    scrollableContainerRef,
  };
};

export default CardGallery;
