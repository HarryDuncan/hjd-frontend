import ViewItemLayout from "components/layout/ViewItemLayout";
import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { useProductData } from "hooks/shop/useProductData";

const rootUrl = "/images/shop/";
const ProductDetails = () => {
  const { product, loading } = useProductData();
  if (!product) return null;
  return (
    <ViewItemLayout
      imageUrl={`${rootUrl}${product?.imageUrl}`}
      title={product?.title}
    >
      <ViewItemDetailsContainer>
        <MainTitle $isDark={true}>{product.title}</MainTitle>
        <ContentText>{product.description}</ContentText>
      </ViewItemDetailsContainer>
    </ViewItemLayout>
  );
};

export default ProductDetails;
