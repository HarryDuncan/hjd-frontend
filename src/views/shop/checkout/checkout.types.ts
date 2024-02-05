import { CartItem } from "../shop-context/shop.context";

export interface Address {
  city: string;
  country: string;
  line1: string;
  line2: string | null;
  postal_code: string;
  state: string;
}

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
  cart: CartItem[];
  transactionDetails: TransactionDetails;
}