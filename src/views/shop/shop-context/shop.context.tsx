import { Product } from "models/shop/types";
import React, { createContext, useReducer, ReactNode, useContext } from "react";

export type CartItem = {
  product: Product;
  quantity: number;
  errorMessage?: string;
  message?: string;
};

export type AppState = {
  cart: CartItem[];
  shippingTotal: number | null;
};

export type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "UPDATE_CART"; payload: CartItem[] }
  | { type: "UPDATE_SHIPPING"; payload: { shippingTotal: number } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number } }
  | { type: "CHECKOUT" };

type ShopContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const initialState: AppState = {
  cart: [],
  shippingTotal: null,
};

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart, action.payload].reduce(
        (result: CartItem[], cartItem) => {
          const itemIndex = result.findIndex(
            (item) => item.product.id === cartItem.product.id
          );
          if (itemIndex === -1) {
            result.push(cartItem);
          } else {
            result[itemIndex].quantity += cartItem.quantity;
          }
          return result;
        },
        []
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "UPDATE_SHIPPING":
      return {
        ...state,
        shippingTotal: action.payload.shippingTotal,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.productId
        ),
      };
    default:
      return state;
  }
};

const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a StoreProvider");
  }

  return context;
};

export { ShopProvider, useShopContext };
