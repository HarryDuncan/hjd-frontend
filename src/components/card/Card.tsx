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

  return (
    <CardWrapper onClick={cardClicked}>
      {cardDetails.imageUrl && (
        <CardImage src={cardDetails.imageUrl} alt={cardDetails.title} />
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
