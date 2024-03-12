import { useCallback, useEffect, useState } from "react";
import { sendReceipt } from "services/shop/sendReceipt";
import {
  BillingDetails,
  CustomerDetails,
  ShippingData,
  TransactionDetails,
} from "../checkout.types";
import { CartItem } from "views/shop/shop-context/shop.context";

export const useSendReceipt = (
  billingDetails: BillingDetails | null,
  customerDetails: CustomerDetails | null,
  shippingData: ShippingData | null,
  cart: CartItem[],
  transactionDetails: TransactionDetails | null
) => {
  const [hasSentReceipt, setHasSentReceipt] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const sendReceiptData = useCallback(async () => {
    if (
      billingDetails &&
      customerDetails &&
      transactionDetails &&
      shippingData &&
      cart.length > 0
    ) {
      const receiptData = {
        orderId,
        billingDetails,
        customerDetails,
        cart,
        shippingData,
        transactionDetails,
      };

      const { data } = await sendReceipt(receiptData);
      if (data?.orderId) {
        setOrderId(data?.orderId as number);
      }

      setHasSentReceipt(true);
    }
  }, [
    billingDetails,
    customerDetails,
    cart,
    hasSentReceipt,
    shippingData,
    transactionDetails,
    orderId,
  ]);

  useEffect(() => {
    if (!hasSentReceipt) {
      sendReceiptData();
    }
  }, [sendReceiptData]);

  return { sendReceiptData, orderId };
};
