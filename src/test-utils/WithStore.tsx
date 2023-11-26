import { PropsWithChildren, useMemo } from "react";
import { WithTheme } from "./WithTheme";
import { ShopProvider } from "views/shop/shop-context/shop.context";

// TODO - configure for generic stores/multiple
export const WithStore = ({ children }: PropsWithChildren) => {
  return (
    <WithTheme>
      <ShopProvider>{children}</ShopProvider>
    </WithTheme>
  );
};
