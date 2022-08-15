import React, { useRef } from "react";
import { CardFooter, CardImage, CardTitle, CardWrapper } from "./Card.styles";

export interface CardDetails {
  title: string;
  imageUrl?: string;
  id?: number | string;
}
interface CardProps {
  cardDetails: CardDetails;
  onClick?: () => void;
}

export function Card({ cardDetails, onClick }: CardProps) {
  const imgElementRef = useRef<HTMLImageElement | null>(null);
  const cardClicked = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <CardWrapper onClick={cardClicked}>
      {cardDetails.imageUrl && (
        <CardImage
          src={cardDetails.imageUrl}
          alt={cardDetails.title}
          height={100}
          width={100}
          quality={10}
        />
      )}
      <CardFooter>
        <CardTitle>{cardDetails.title}</CardTitle>
      </CardFooter>
    </CardWrapper>
  );
}
