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
    if (onClick && id) {
      onClick(id);
    }
  };

  const windowSize = useWindowSize();

  //   const getHeight = () => {
  //     switch (windowSize) {
  //       case "mobile":
  //         return items.length * 70;
  //       case "wide-screen":
  //         return (items.length / 2) * 45;
  //       case "desktop":
  //       default:
  //         if (items.length > 3 && items.length < 6) {
  //           return (items.length / 2) * 45;
  //         } else {
  //           return (items.length / 3) * 45;
  //         }
  //     }
  //   };

  //   const getColumns = () => {
  //     if (columnCount) {
  //       return columnCount;
  //     }
  //     switch (windowSize) {
  //       case "mobile":
  //         return 1;
  //       case "tablet":
  //         return 2;
  //       case "desktop":
  //         return 4;
  //       case "wide-screen":
  //       default:
  //         return 5;
  //     }
  //   };
  const height = `100vh`;
  const columns = 5;

  return (
    <CardGalleryContainer>
      {items.map(({ id, title, imageUrl }) => (
        <Card
          cardDetails={{ title, imageUrl }}
          onClick={() => cardClicked(id)}
          key={id}
        />
      ))}
    </CardGalleryContainer>
  );
};

export default CardGallery;
