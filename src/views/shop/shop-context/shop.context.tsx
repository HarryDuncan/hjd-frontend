import { Product, ProductVariation } from "models/shop/types";
import React, { createContext, useReducer, ReactNode, useContext } from "react";

export type CartItem = {
  product: Product | ProductVariation;
  quantity: number;
  errorMessage?: string;
  message?: string;
};

export type ShopState = {
  cart: CartItem[];
  shippingZoneId: number | null;
  shippingTotal: number | null;
};

export type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "UPDATE_CART"; payload: CartItem[] }
  | {
      type: "UPDATE_SHIPPING";
      payload: { shippingTotal: number; selectedShippingZoneId: null | number };
    }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; quantity: number };
    }
  | { type: "CHECKOUT" };

type ShopContextType = {
  state: ShopState;
  dispatch: React.Dispatch<Action>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const initialState: ShopState = {
  cart: [],
  shippingZoneId: null,
  shippingTotal: null,
};

const reducer = (state: ShopState, action: Action): ShopState => {
  switch (action.type) {
    case "UPDATE_CART":
      sessionStorage.setItem("cart", JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload,
      };
    case "UPDATE_QUANTITY": {
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.product.id === action.payload.productId) {
          return { ...cartItem, quantity: action.payload.quantity };
        }
        return cartItem;
      });
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
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
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "UPDATE_SHIPPING":
      sessionStorage.setItem("shipping", JSON.stringify(action.payload));
      return {
        ...state,
        shippingTotal: action.payload.shippingTotal,
        shippingZoneId: action.payload.selectedShippingZoneId,
      };
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.productId
      );
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
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
