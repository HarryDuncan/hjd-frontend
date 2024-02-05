import { FetchResponse } from "models/general.types";

export interface AuthenticationData {
  username: string;
  password: string;
  mfaCode: string;
}

export interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
  country: string;
  orderDetails: string;
  status: string;
  refId: string;
  purchased: string;
  trackingNumber: string;
  shippingMethod: string;
  shippingCost: number;
}

export type FetchOrderResponse = FetchResponse & {
  orders: Order[];
};
