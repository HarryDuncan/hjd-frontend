import { useProductData } from "hooks/shop/useProductData";
import { useScrollProducts } from "hooks/shop/useScrollProducts";
import { useCallback, useState } from "react";
import { ContentSubText, ContentText } from "components/text/Text";
import { useRouter } from "next/router";
import SlideWithBackgroundTransition from "components/animations/page-transitions/SlideWithBackgroundTransition";
import { Direction } from "utils/moveThroughArray";
import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";
import ViewItemLayout from "layout/view-item-layout/ViewItemLayout";

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
      >
        <ContentText>{description}</ContentText>
        <br />
        <ContentSubText>Sold Out</ContentSubText>
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
