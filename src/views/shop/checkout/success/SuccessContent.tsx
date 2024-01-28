import { MainTitle } from "components/text/Text";
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

const SuccessContent = () => {
  const { cart, shipping } = useShopDataFromStorage();
  const total = useCalculateTotal(cart, shipping);
  const router = useRouter();
  const [billingDetails, setBillingDetails] = useState<any>(null);
  const [customerDetails, setCustomerDetails] = useState<any>(null);
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
        const {
          session: { shipping_details, customer_details },
        } = await response.json();
        setBillingDetails(shipping_details);
        setCustomerDetails(customer_details);
      }
    };

    if (sessionId && sessionId.length) {
      getTransactionDetails();
    }
  }, [router, setCustomerDetails, setBillingDetails]);

  return (
    <CheckoutContentContainer>
      <CheckoutTitleContainer>
        <TextScroller text={" Thank You "} isLight={false} />
      </CheckoutTitleContainer>
      {cart.length && <CartTable isReadOnly parsedCartData={cart} />}

      {billingDetails && customerDetails && (
        <TransactionDetailsSection
          billingDetails={billingDetails}
          customerDetails={customerDetails}
        />
      )}

      <CheckoutTotal total={total} />
    </CheckoutContentContainer>
  );
};

export default SuccessContent;
