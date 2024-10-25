import { useProductData } from "views/shop/hooks/useProductData";
import { useScrollProducts } from "views/shop/hooks/useScrollProducts";
import { useCallback, useState } from "react";
import { ContentText } from "components/text/Text";
import { useRouter } from "next/router";
import SlideWithBackgroundTransition from "components/animations/page-transitions/slide-with-background/SlideWithBackgroundTransition";
import { Direction } from "utils/moveThroughArray";
import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import ViewItemLayout from "layout/view-item-layout/ViewItemLayout";
import { ProductControl } from "views/shop/shop-gallery/product-control/ProductControl";

const ProductDetails = () => {
  const { product } = useProductData();

  const changeProduct = useScrollProducts();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<Direction>(
    Direction.FORWARD
  );

  if (!product) return null;
  const { description } = product;
  const onChangeItem = (direction: Direction) => {
    setChangedDirection(direction);
    changeProduct(direction);
  };
  return (
    <SlideWithBackgroundTransition direction={changedDirection}>
      <ViewItemLayout
        onChangeItem={onChangeItem}
        imageUrl={`${SHOP_IMAGE_URL_ROOT}${product?.imageUrl}`}
        title={product?.title}
        handleExit={handleExit}
        multiImage={
          product.multiImages
            ? product.multiImages.map(
                (multiImage) => `${SHOP_IMAGE_URL_ROOT}${multiImage}`
              )
            : null
        }
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
