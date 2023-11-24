import { NextPage } from "next";
import { useShopContext } from "views/shop/shop-context/shop.context";

const Checkout: NextPage = () => {
  const { state, dispatch } = useShopContext();
  console.log(state);
  return <></>;
};

export default Checkout;
