import { LineItem } from "models/shop/types";

export interface Address {
  city: string;
  country: string;
  line1: string;
  line2: string | null;
  postalCode: string;
  state: string;
}
export type ShippingData = {
  shippingZoneId: number | null;
  shippingTotal: number | null;
};
export interface BillingDetails {
  address: Address;
  name: string;
}

export interface CustomerDetails {
  email: string;
}

export interface TransactionDetails {
  refId: string;
  purchaseDate: number;
}
export interface ReceiptData {
  customerDetails: CustomerDetails;
  billingDetails: BillingDetails;
  cart: LineItem[];
  shippingData: ShippingData;
  transactionDetails: TransactionDetails;
  orderId?: number | null;
}
