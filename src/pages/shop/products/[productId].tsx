import ViewItemLayout from "components/layout/ViewItemLayout";
import { ProductInfo } from "components/shop/product-info/ProductInfo";
import { useProductData } from "hooks/shop/useProductData";

const rootUrl = "/images/shop/";
const ProductDetails = () => {
  const { product } = useProductData();
  if (!product) return null;
  return (
    <ViewItemLayout
      imageUrl={`${rootUrl}${product?.imageUrl}`}
      title={product?.title}
    >
      <ProductInfo product={product} />
    </ViewItemLayout>
  );
};

export default ProductDetails;
