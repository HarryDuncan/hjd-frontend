import { useCallback, useEffect, useState } from "react";
import { sendReceipt } from "services/shop/sendReceipt";
import {
  BillingDetails,
  CustomerDetails,
  TransactionDetails,
} from "../checkout.types";
import { CartItem } from "views/shop/shop-context/shop.context";

export const useSendReceipt = (
  billingDetails: BillingDetails | null,
  customerDetails: CustomerDetails | null,
  cart: CartItem[],
  transactionDetails: TransactionDetails | null
) => {
  const [hasSentReceipt, setHasSentReceipt] = useState<boolean>(false);
  const sendReceiptData = useCallback(() => {
    console.log(billingDetails);
    console.log(customerDetails);
    console.log(transactionDetails);
    console.log(cart);
    if (
      billingDetails &&
      customerDetails &&
      transactionDetails &&
      cart.length > 0
    ) {
      const receiptData = {
        billingDetails,
        customerDetails,
        cart,
        transactionDetails,
      };

      sendReceipt(receiptData);
      setHasSentReceipt(true);
    }
  }, [
    billingDetails,
    customerDetails,
    cart,
    hasSentReceipt,
    transactionDetails,
  ]);

  useEffect(() => {
    if (!hasSentReceipt) {
      sendReceiptData();
    }
  }, [sendReceiptData]);

  return sendReceiptData;
};
