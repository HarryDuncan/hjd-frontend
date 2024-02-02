import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { useShopDataFromStorage } from "views/shop/hooks/useShopDataFromStorage";
import CartTable from "../checkout-container/cart-table/CartTable";
import { CheckoutTotal } from "../checkout-container/checkout-total/CheckoutTotal";
import {
  CheckoutContentContainer,
  CheckoutTitleContainer,
} from "../checkout-container/checkout.styles";
import { TransactionDetailsSection } from "./TransactionDetailsSection";
import { TextScroller } from "components/text-scroller/TextScroller";
import { sendReceipt } from "services/shop/sendReceipt";
import { BillingDetails, CustomerDetails } from "../checkout.types";
import { CartItem } from "views/shop/shop-context/shop.context";
import { snakeCaseKeysToCamelCase } from "utils/snakeCaseToCamelCase";

const SuccessContent = () => {
  const { cart, shipping } = useShopDataFromStorage();
  const total = useCalculateTotal(cart, shipping);
  const router = useRouter();
  const [billingDetails, setBillingDetails] = useState<BillingDetails | null>(
    null
  );
  const [customerDetails, setCustomerDetails] =
    useState<CustomerDetails | null>(null);
  useEffect(() => {
    const sessionId = router.query.session_id as string;
    const getTransactionDetails = async () => {
      const response = await fetch(`/api/checkout_success`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });
      if (response.ok) {
        const data = await response.json();
        const { shippingDetails, customerDetails } =
          snakeCaseKeysToCamelCase(data);
        setBillingDetails(shippingDetails as unknown as BillingDetails);
        setCustomerDetails(customerDetails as unknown as CustomerDetails);
      }
    };

    if (sessionId && sessionId.length) {
      getTransactionDetails();
    }
  }, [router, setCustomerDetails, setBillingDetails]);
  useSendReceipt(billingDetails, customerDetails, cart);
  return (
    <CheckoutContentContainer>
      <CheckoutTitleContainer>
        <TextScroller text=" Thank You " isLight={false} />
      </CheckoutTitleContainer>
      {cart.length && <CartTable isReadOnly parsedCartData={cart} />}

      {billingDetails && customerDetails && (
        <TransactionDetailsSection billingDetails={billingDetails} />
      )}

      <CheckoutTotal total={total} />
    </CheckoutContentContainer>
  );
};

const useSendReceipt = (
  billingDetails: BillingDetails | null,
  customerDetails: CustomerDetails | null,
  cart: CartItem[]
) => {
  const [hasSentReceipt, setHasSentReceipt] = useState<boolean>(false);
  useEffect(() => {
    if (
      !hasSentReceipt &&
      billingDetails &&
      customerDetails &&
      cart.length > 0
    ) {
      const receiptData = {
        billingDetails,
        customerDetails,
        cart,
      };
      sendReceipt(receiptData);
      setHasSentReceipt(true);
    }
  }, [billingDetails, customerDetails, cart, hasSentReceipt]);
};

export default SuccessContent;
