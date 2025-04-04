import { useCallback, useEffect, useState } from "react";
import { resendReceipt } from "services/shop/resendReceipt";
import { onPurchaseComplete } from "services/shop/onPurchaseComplete";
import {
  BillingDetails,
  CustomerDetails,
  ShippingData,
  TransactionDetails,
} from "../checkout.types";
import { LineItem } from "models/shop/types";

export const useSendReceipt = (
  billingDetails: BillingDetails | null,
  customerDetails: CustomerDetails | null,
  shippingData: ShippingData | null,
  cart: LineItem[],
  transactionDetails: TransactionDetails | null,
  orderAlreadyCreated: boolean
) => {
  const [hasSentReceipt, setHasSentReceipt] =
    useState<boolean>(orderAlreadyCreated);
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
      if (orderId) {
        // TODO - add loading state
        await resendReceipt(orderId, receiptData);
      } else {
        const { data } = await onPurchaseComplete(receiptData);
        if (data?.orderId) {
          setOrderId(data?.orderId as number);
        }
      }
      setHasSentReceipt(true);
    }
  }, [
    billingDetails,
    customerDetails,
    cart,
    shippingData,
    transactionDetails,
    orderId,
  ]);

  useEffect(() => {
    const storedOrderId = localStorage.getItem(transactionDetails?.refId ?? "");
    if (!hasSentReceipt && !storedOrderId) {
      sendReceiptData();
    }
    if (storedOrderId) {
      setOrderId(Number(storedOrderId));
    }
  }, [hasSentReceipt, sendReceiptData, transactionDetails?.refId]);

  return { sendReceiptData, orderId };
};
