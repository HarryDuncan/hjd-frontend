import { Card, CardDetails } from "components/card/Card";
import { useWindowSize } from "hooks/useWindowSize";
import React, { useState } from "react";
import { CardGalleryContainer } from "./styledComponents";

interface CardGalleryProps {
  items: CardDetails[];
  onClick: (id: number | string) => void;
  columnCount?: number;
}

const CardGallery = ({ items, onClick, columnCount }: CardGalleryProps) => {
  const cardClicked = (id: number | string | undefined) => {
    console.log(id);
    if (onClick && id) {
      onClick(id);
    }
  };

  return (
    <CardGalleryContainer>
      {items.map(({ id, title, imageUrl, footer }) => (
        <Card
          cardDetails={{ title, imageUrl, footer }}
          onClick={() => cardClicked(id)}
          key={id}
        />
      ))}
    </CardGalleryContainer>
  );
};

export default CardGallery;
