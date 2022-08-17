import { Label } from "components/styled-components/Text";
import { ProductVariations } from "models/shop/types";
import { FooterContainer, Title } from "./ProductCardFooter.styles";

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
  const variationLabel = variations.map(({ title }) => title);
  return (
    <FooterContainer>
      <Title>{title}</Title>
      <Label>{!isSoldOut ? `AUD ${priceLabel}` : `Sold Out`}</Label>
      <br />
      {variations.length >= 2 && (
        <Label>
          {variationLabel[0]} - {variationLabel[variationLabel.length - 1]}
        </Label>
      )}
    </FooterContainer>
  );
};

const getPriceLabel = (
  price: number | null,
  variations: ProductVariations[]
) => {
  if (price) return price;

  const productPrices: number[] = variations.map(({ price }) => price);
  const min = Math.min(...productPrices);
  const max = Math.max(...productPrices);
  return `${min}-$${max}`;
};
