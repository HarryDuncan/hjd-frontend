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
import { ContentSubText } from "components/text/Text";
import { useTransactionData } from "./useTransactionData";
import { useSendReceipt } from "./useSendReceipt";
import { CheckoutNavigation } from "../checkout-container/checkout-navigation/CheckoutNavigation";

const SuccessContent = () => {
  const { cart, shipping } = useShopDataFromStorage();
  const total = useCalculateTotal(cart, shipping);
  const { billingDetails, customerDetails, transactionDetails } =
    useTransactionData();
  const { sendReceiptData, orderId } = useSendReceipt(
    billingDetails,
    customerDetails,
    cart,
    transactionDetails
  );
  return (
    <CheckoutContentContainer>
      <CheckoutNavigation navigationRoutes={["home"]} />
      <CheckoutTitleContainer>
        <TextScroller text=" Thank You " isLight={false} />
      </CheckoutTitleContainer>

      {cart.length && <CartTable isReadOnly parsedCartData={cart} />}

      {billingDetails && customerDetails && (
        <TransactionDetailsSection
          orderId={orderId}
          billingDetails={billingDetails}
        />
      )}
      <CheckoutTotal total={total} />
      <CheckoutContentContainer>
        <ContentSubText>An email will be sent with your receipt</ContentSubText>
        <br />
        <ContentSubText>
          You wil receieve a confirmation when your order has been dispatched
        </ContentSubText>
        <br />
        <ContentSubText>
          Haven't received your receipt?
          <a href="#" onClick={sendReceiptData}>
            Click here
          </a>
        </ContentSubText>
      </CheckoutContentContainer>
    </CheckoutContentContainer>
  );
};

export default SuccessContent;
