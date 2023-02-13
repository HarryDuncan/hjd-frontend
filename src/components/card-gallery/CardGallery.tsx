import React, { useEffect } from "react";
import { Card, CardDetails } from "components/card/Card";
import { CardGalleryContainer } from "./styledComponents";

export interface LoadMoreProps {
  initialLoadSize: number;
  loadMoreSize: number;
}
interface CardGalleryProps {
  items: CardDetails[];
  onClick: (id: number | string) => void;
  loadMoreProps?: LoadMoreProps;
}

const CardGallery = ({ items, onClick, loadMoreProps }: CardGalleryProps) => {
  const cardClicked = (id: number | string | undefined) => {
    if (onClick && id) {
      onClick(id);
    }
  };

  const displayedCards = useLoadMoreOnScroll(loadMoreProps, items);
  return (
    <CardGalleryContainer>
      {displayedCards.map(({ id, title, imageUrl, footer }) => (
        <Card
          cardDetails={{ title, imageUrl, footer }}
          onClick={() => cardClicked(id)}
          key={id}
        />
      ))}
    </CardGalleryContainer>
  );
};

const useLoadMoreOnScroll = (
  loadMoreProps: LoadMoreProps,
  items: CardDetails[]
): CardDetails[] => {
  useCleanupListeners();
  if (!loadMoreProps) {
    return items;
  }
  document.addEventListener("scroll", (event) => handleGalleryScroll());

  console.log(loadMoreProps);
  return items;
};
const useCleanupListeners = () => {
  useEffect(
    () => () => document.removeEventListener("scroll", handleGalleryScroll),
    []
  );
};

const handleGalleryScroll = () => {
  console.log("sssd");
};
export default CardGallery;
