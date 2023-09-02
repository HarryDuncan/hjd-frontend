import ViewItemLayout from "components/layout/ViewItemLayout";
import { useProductData } from "hooks/shop/useProductData";
import { Direction } from "../../../../utils/helpers/moveThroughArray";
import { useScrollProducts } from "hooks/shop/useScrollProducts";
import { useCallback, useState } from "react";
import { ViewItemDetailsContainer } from "components/containers/Containers";
import { ContentSubText, ContentText, MainTitle } from "components/text/Text";
import { useRouter } from "next/router";
import SlideWithBackgroundTransition from "components/animations/page-transitions/SlideWithBackgroundTransition";
import { Icon, IconTypes } from "components/icons/Icons";

const rootUrl = "/images/shop/";
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
        imageUrl={`${rootUrl}${product?.imageUrl}`}
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
