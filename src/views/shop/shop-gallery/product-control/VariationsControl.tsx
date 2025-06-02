import { Dropdown } from "components/inputs/dropdown/Dropdown";
import { ProductVariation } from "models/shop/types";
import { useCallback, useEffect, useState } from "react";
import { ColumnContainer } from "../ShopGallery.styles";
import {
  CallToAction,
  CTA_VARIANT,
} from "components/buttons/call-to-action/CallToAction";

interface VariationsControlProps {
  variations: ProductVariation[];
  onAddToCart: (variationId: string) => void;
}

export function VariationsControl({
  variations,
  onAddToCart,
}: VariationsControlProps) {
  const [selectedVariation, setSelectedVariation] = useState<string | null>("");
  const dropdownOptions = variations.map((variation) => ({
    value: String(variation.id),
    label: `${variation.title} - $${variation.price} (${variation.stock} in stock)`,
    disabled: variation.stock === 0,
  }));

  const handleSelect = (optionValue: string) => {
    setSelectedVariation(optionValue);
  };

  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  useEffect(() => {
    if (selectedVariation && hasBeenClicked) {
      onAddToCart(selectedVariation);
      setHasBeenClicked(false);
    }
  }, [selectedVariation, hasBeenClicked, onAddToCart]);

  const handleClick = useCallback(() => {
    setHasBeenClicked(true);
  }, [setHasBeenClicked]);
  return (
    <ColumnContainer>
      <Dropdown options={dropdownOptions} onChange={handleSelect} />
      <CallToAction
        variant={CTA_VARIANT.RELATIVE}
        onClick={handleClick}
        text="Add To Cart"
        disabled={selectedVariation == null || selectedVariation === ""}
      />
    </ColumnContainer>
  );
}
