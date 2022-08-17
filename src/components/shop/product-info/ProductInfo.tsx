import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { Product } from "models/shop/types";

export const ProductInfo = ({ product }: { product: Product }) => {
  const { title, description } = product;
  console.log(description);
  return (
    <ViewItemDetailsContainer>
      <MainTitle $isDark={true}>{title}</MainTitle>
      <ContentText>{description}</ContentText>
    </ViewItemDetailsContainer>
  );
};
