import { Card, CardDetails } from "components/card/Card";
import { CardGalleryContainer } from "./styledComponents";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useOnScroll } from "hooks/client-hooks/useOnScroll";
import useDeviceSize from "hooks/client-hooks/useDeviceSize";
import { LOAD_MORE_OFFSET } from "constants/ui.constants";

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
  scrollableContainerRef: MutableRefObject<HTMLDivElement | null>;
} => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  const [itemsDisplayed, setItemsDisplayed] = useState<number>(
    loadMoreProps?.initialLoadSize ?? items.length
  );
  const { height: clientHeight } = useDeviceSize();
  const scrollY = useOnScroll();
  useEffect(() => {
    const height = scrollableContainerRef.current?.clientHeight ?? 0;
    if (height && scrollY >= height - (clientHeight + LOAD_MORE_OFFSET)) {
      setItemsDisplayed((i) => i + Number(loadMoreProps?.loadMoreSize ?? 0));
    }
  }, [scrollY, scrollableContainerRef.current, clientHeight, loadMoreProps]);

  return {
    displayedItems: items.slice(0, itemsDisplayed),
    scrollableContainerRef,
  };
};

export default CardGallery;
