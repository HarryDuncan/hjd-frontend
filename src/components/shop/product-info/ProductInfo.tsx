import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import {
  Exit,
  ScrollLeft,
  ScrollRight,
} from "components/styled-components/Images";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { EXIT, SCROLL_LEFT, SCROLL_RIGHT } from "constants/ui.constants";
import { useScrollProducts } from "hooks/shop/useScrollProducts";
import { Product } from "models/shop/types";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Direction } from "../../../../utils/helpers/moveThroughArray";

export const ProductInfo = ({ product }: { product: Product }) => {
  const { title, description } = product;
  const changeProduct = useScrollProducts();
  const handleExit = useHandleExit();
  return (
    <ViewItemDetailsContainer>
      <Exit src={EXIT} onClick={handleExit} />
      <ScrollLeft
        src={SCROLL_LEFT}
        onClick={() => changeProduct(Direction.REVERSE)}
      />
      <ScrollRight
        src={SCROLL_RIGHT}
        onClick={() => changeProduct(Direction.FORWARD)}
      />
      <MainTitle $isLight={true}>{title}</MainTitle>
      <ContentText>{description}</ContentText>
    </ViewItemDetailsContainer>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/shop");
  }, [router]);
};
