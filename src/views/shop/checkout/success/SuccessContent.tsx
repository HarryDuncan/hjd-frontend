import { useCalculateTotal } from "views/shop/hooks/useCalculateTotal";
import { useShopDataFromStorage } from "views/shop/hooks/useShopDataFromStorage";
import CartTable from "../checkout-container/cart-table/CartTable";
import { CheckoutTotal } from "../checkout-container/checkout-total/CheckoutTotal";
import { CheckoutTitleContainer } from "../checkout-container/checkout.styles";
import { TransactionDetailsSection } from "./TransactionDetailsSection";
import { TextScroller } from "components/text-scroller/TextScroller";
import { ContentSubText, ContentText } from "components/text/Text";
import { useTransactionData } from "./useTransactionData";
import { useSendReceipt } from "./useSendReceipt";
import { FloatingContentNavigation } from "components/navigation/floating-content-navigation/FloatingContentNavigation";
import { FloatingContentContainer } from "components/containers/Containers";
import { useEffect } from "react";

const SuccessContent = () => {
  useEffect(() => {
    sessionStorage.setItem("hasCheckedOut", JSON.stringify(true));

    return () => {
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("hasCheckedOut");
    };
  }, []);
  const { cart, shipping } = useShopDataFromStorage();
  const total = useCalculateTotal(cart, shipping?.shippingTotal ?? 0);
  const {
    billingDetails,
    customerDetails,
    transactionDetails,
    orderAlreadyCreated,
  } = useTransactionData();
  const { sendReceiptData, orderId } = useSendReceipt(
    billingDetails,
    customerDetails,
    shipping,
    cart,
    transactionDetails,
    orderAlreadyCreated
  );

  useEffect(() => {
    if (orderId && transactionDetails && transactionDetails.refId) {
      localStorage.setItem(transactionDetails.refId, String(orderId));
    }
  }, [orderId, transactionDetails]);

  return (
    <FloatingContentContainer>
      <FloatingContentNavigation navigationRoutes={["home"]} />
      <CheckoutTitleContainer>
        <TextScroller text=" Thank You " isLight={false} />
      </CheckoutTitleContainer>

      {cart.length > 0 ? (
        <CartTable isReadOnly parsedCartData={cart} />
      ) : (
        <ContentText>This link has expired</ContentText>
      )}
      {billingDetails && customerDetails && (
        <TransactionDetailsSection
          orderId={orderId}
          customerDetails={customerDetails}
          billingDetails={billingDetails}
        />
      )}
      <CheckoutTotal total={total} />
      <FloatingContentContainer>
        <ContentSubText>An email will be sent with your receipt</ContentSubText>
        <br />
        <ContentSubText>
          You will receieve a confirmation when your order has been dispatched
        </ContentSubText>
        <br />
        <ContentSubText>
          Haven't received your receipt?
          <br />
          <a href="#" onClick={sendReceiptData}>
            Resend Receipt
          </a>
        </ContentSubText>
      </FloatingContentContainer>
    </FloatingContentContainer>
  );
};

export default SuccessContent;
