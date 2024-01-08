import { useQuery } from "react-query";
import { checkInventory } from "services/shop/checkInventory";
import { useShopContext } from "views/shop/shop-context/shop.context";

export const useCheckInventory = () => {
  const {
    state: { cart },
  } = useShopContext();
  const checkedInventoryResult = useQuery<any>(["check-inventory"], () =>
    checkInventory(cart)
  );
  console.log(checkedInventoryResult);
};
