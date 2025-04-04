import { useProductData } from "views/shop/hooks/useProductData";
import { useScrollProducts } from "views/shop/hooks/useScrollProducts";
import { useCallback, useState } from "react";
import { ContentText } from "components/text/Text";
import { useRouter } from "next/router";
import SlideWithBackgroundTransition from "components/animations/page-transitions/slide-with-background/SlideWithBackgroundTransition";
import { Direction } from "utils/moveThroughArray";
import ViewItemLayout from "layout/view-item-layout/ViewItemLayout";
import { ProductControl } from "views/shop/shop-gallery/product-control/ProductControl";

const ProductDetails = () => {
  const { product } = useProductData();

  const changeProduct = useScrollProducts();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<string>(
    Direction.FORWARD
  );

  if (!product) return null;
  const { description } = product;
  const onChangeItem = (direction: string) => {
    setChangedDirection(direction);
    changeProduct(direction);
  };
  return (
    <SlideWithBackgroundTransition direction={changedDirection}>
      <ViewItemLayout
        onChangeItem={onChangeItem}
        imageUrls={product?.imageUrls}
        title={product?.title ?? ""}
        handleExit={handleExit}
      >
        <ContentText>{description}</ContentText>
        <br />
        <ProductControl productData={product} />
      </ViewItemLayout>
    </SlideWithBackgroundTransition>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/shop");
  }, [router]);
};

export default ProductDetails;
