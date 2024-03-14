import React, { createContext, useReducer, ReactNode, useContext } from "react";

export type DashboardState = {
  isLoggedIn: boolean;
};

export type Action = { type: "LOGIN" } | { type: "LOGOUT" };

type DashboardContextType = {
  state: DashboardState;
  dispatch: React.Dispatch<Action>;
};

const ShopContext = createContext<DashboardContextType | undefined>(undefined);

const initialState: DashboardState = {
  isLoggedIn: false,
};

const reducer = (state: DashboardState, action: Action): DashboardState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

const useDashboardContext = (): DashboardContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a StoreProvider");
  }

  return context;
};

export { DashboardProvider, useDashboardContext };
