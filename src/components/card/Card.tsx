import { useState } from "react";
import { CardImage, CardTitle, CardWrapper } from "./Card.styles";
import { CardFooter } from "./CardFooter";

export interface CardDetails {
  title: string;
  imageUrl?: string;
  id?: number | string;
  footer?: JSX.Element;
}
interface CardProps {
  cardDetails: CardDetails;
  onClick?: () => void;
}

export const Card = ({ cardDetails, onClick }: CardProps) => {
  const cardClicked = () => {
    if (onClick) {
      onClick();
    }
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <CardWrapper
      onClick={cardClicked}
      style={{
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {cardDetails.imageUrl && (
        <CardImage
          onLoad={handleImageLoad}
          src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${cardDetails.imageUrl}`}
          alt={cardDetails.title}
        />
      )}
      {cardDetails.footer ? (
        cardDetails.footer
      ) : (
        <CardFooter>
          <CardTitle>{cardDetails.title}</CardTitle>
        </CardFooter>
      )}
    </CardWrapper>
  );
};
