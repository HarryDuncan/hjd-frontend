import { CardFooter } from "components/card/Card.styles";
import { Title } from "components/shop/product-card-footer/ProductCardFooter.styles";

interface CampaignCardFooterProps {
  title: string;
}

export const CampaignCardFooter = ({ title }: CampaignCardFooterProps) => {
  return (
    <CardFooter>
      <Title>{title}</Title>
    </CardFooter>
  );
};
