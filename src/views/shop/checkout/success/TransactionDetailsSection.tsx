import { ContentText } from "components/text/Text";
import { CheckoutSection } from "../checkout-container/checkout.styles";
import { BillingDetails, CustomerDetails } from "../checkout.types";

interface BillingDetailsProps {
  orderId: number | null;
  customerDetails: CustomerDetails;
  billingDetails: BillingDetails;
}
export const TransactionDetailsSection = ({
  orderId,
  customerDetails,
  billingDetails,
}: BillingDetailsProps) => (
  <CheckoutSection>
    {orderId && <ContentText>Order Id: {orderId}</ContentText>}
    <ContentText>Email: {customerDetails.email}</ContentText>
    <ContentText>Shipping To: {billingDetails.name}</ContentText>
    <ContentText>Address: {billingDetails.address.line1}</ContentText>
    <ContentText>City: {billingDetails.address.city}</ContentText>
    <ContentText>Country: {billingDetails.address.country}</ContentText>
    <ContentText>State: {billingDetails.address.state}</ContentText>
    <ContentText>Post Code: {billingDetails.address.postalCode}</ContentText>
  </CheckoutSection>
);
