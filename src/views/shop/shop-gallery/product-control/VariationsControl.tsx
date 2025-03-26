import { CircleActionButton } from "components/buttons/circle-action-button/CircleActionButton";
import { Dropdown } from "components/inputs/dropdown/Dropdown";
import { ProductVariation } from "models/shop/types";
import { useState } from "react";
import { ColumnContainer } from "../ShopGallery.styles";

interface VariationsControlProps {
  variations: ProductVariation[];
  onAddToCart: (variationId: string) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export function VariationsControl({
  variations,
  onAddToCart,
  buttonRef,
}: VariationsControlProps) {
  const [selectedVariation, setSelectedVariation] = useState<string>("");
  const dropdownOptions = variations.map((variation) => ({
    value: String(variation.id),
    label: `${variation.title} - $${variation.price} (${variation.stock} in stock)`,
    disabled: variation.stock === 0,
  }));

  const handleAddToCart = () => {
    if (selectedVariation) {
      onAddToCart(selectedVariation);
    }
  };

  const handleSelect = (optionValue: string) => {
    setSelectedVariation(optionValue);
  };
  return (
    <ColumnContainer>
      <Dropdown options={dropdownOptions} onChange={handleSelect} />
      <CircleActionButton
        ref={buttonRef}
        disabled={!selectedVariation}
        onClick={handleAddToCart}
        title="Add To Cart"
        circleFill="#030303"
      />
    </ColumnContainer>
  );
}
