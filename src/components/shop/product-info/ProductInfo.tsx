import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import { ScrollLeft, ScrollRight } from "components/styled-components/Images";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { SCROLL_LEFT, SCROLL_RIGHT } from "constants/ui.constants";
import { useScrollProducts } from "hooks/shop/useScrollProducts";
import { Product } from "models/shop/types";
import { Direction } from "../../../../utils/helpers/moveThroughArray";

export const ProductInfo = ({ product }: { product: Product }) => {
  const { title, description } = product;
  const changeProduct = useScrollProducts();
  return (
    <ViewItemDetailsContainer>
      <ScrollLeft
        src={SCROLL_LEFT}
        onClick={() => changeProduct(Direction.REVERSE)}
      />
      <ScrollRight
        src={SCROLL_RIGHT}
        onClick={() => changeProduct(Direction.FORWARD)}
      />
      <MainTitle $isDark={true}>{title}</MainTitle>
      <ContentText>{description}</ContentText>
    </ViewItemDetailsContainer>
  );
};
