// Remaking a better verison of a card - just don't to refactor for the galleries
import { CardImage, CardTitle, ConfigurableCardWrapper } from "./Card.styled";
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

export const ConfigurableCard = ({ cardDetails, onClick }: CardProps) => {
  const cardClicked = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ConfigurableCardWrapper onClick={cardClicked}>
      {cardDetails.imageUrl && (
        <CardImage
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
    </ConfigurableCardWrapper>
  );
};
