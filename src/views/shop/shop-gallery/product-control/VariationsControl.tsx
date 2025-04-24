import { Dropdown } from "components/inputs/dropdown/Dropdown";
import { ProductVariation } from "models/shop/types";
import { useCallback, useEffect, useState } from "react";
import { ColumnContainer } from "../ShopGallery.styles";
import { SVGButton } from "components/buttons/SVGButton";

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
      <SVGButton
        onClick={handleClick}
        title="Add To Cart"
        isDark
        disabled={selectedVariation == null || selectedVariation === ""}
      />
    </ColumnContainer>
  );
}
