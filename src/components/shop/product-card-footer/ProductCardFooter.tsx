import { CardFooter } from "components/card/Card.styled";
import { Label } from "components/text/Text";
import { ProductVariations } from "models/shop/types";
import { Title } from "./ProductCardFooter.styles";

interface ProductCardFooterProps {
  title: string;
  variations: ProductVariations[];
  isSoldOut: boolean;
  price: number | null;
}

export const ProductCardFooter = ({
  title,
  variations,
  price,
  isSoldOut,
}: ProductCardFooterProps) => {
  const priceLabel = getPriceLabel(price, variations);
  const variationLabel = variations.map(({ title: label }) => label);
  return (
    <CardFooter>
      <Title>{title}</Title>
      <Label>{!isSoldOut ? `AUD ${priceLabel}` : `Sold Out`}</Label>
      <br />
      {variations.length >= 2 && (
        <Label>
          {variationLabel[0]} - {variationLabel[variationLabel.length - 1]}
        </Label>
      )}
    </CardFooter>
  );
};

const getPriceLabel = (
  price: number | null,
  variations: ProductVariations[]
) => {
  if (price) return price;

  const productPrices: number[] = variations.map(
    ({ price: variationPrice }) => variationPrice
  );
  const min = Math.min(...productPrices);
  const max = Math.max(...productPrices);
  return `${min}-$${max}`;
};
