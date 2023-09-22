import ViewItemLayout from "components/layout/ViewItemLayout";
import { useProductData } from "hooks/shop/useProductData";
import { useScrollProducts } from "hooks/shop/useScrollProducts";
import { useCallback, useState } from "react";
import { ViewItemDetailsContainer } from "components/containers/Containers";
import { ContentSubText, ContentText, MainTitle } from "components/text/Text";
import { useRouter } from "next/router";
import SlideWithBackgroundTransition from "components/animations/page-transitions/SlideWithBackgroundTransition";
import { Icon } from "components/icons/Icons";
import { IconTypes } from "components/icons/Icons.types";
import { Direction } from "utils/moveThroughArray";
import { SHOP_IMAGE_URL_ROOT } from "constants/shop.constants";

const ProductDetails = () => {
  const { product } = useProductData();

  const changeProduct = useScrollProducts();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<Direction>(
    Direction.FORWARD
  );

  if (!product) return null;
  const { title, description } = product;
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
      >
        <ViewItemDetailsContainer>
          <Icon onClick={handleExit} type={IconTypes.EXIT} hasGesture />
          <Icon
            onClick={onChangeItem}
            type={IconTypes.CHEVRON_LEFT}
            hasGesture
          />
          <Icon
            onClick={onChangeItem}
            type={IconTypes.CHEVRON_RIGHT}
            hasGesture
          />
          <MainTitle $isLight={false}>{title}</MainTitle>
          <ContentText>{description}</ContentText>
          <br />
          <ContentSubText>Sold Out</ContentSubText>
        </ViewItemDetailsContainer>
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
