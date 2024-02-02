import { ContentText } from "components/text/Text";
import { CheckoutSection } from "../checkout-container/checkout.styles";
import { BillingDetails } from "../checkout.types";

interface BillingDetailsProps {
  billingDetails: BillingDetails;
}
export const TransactionDetailsSection = ({
  billingDetails,
}: BillingDetailsProps) => (
  <CheckoutSection>
    <ContentText>Email: {billingDetails.name}</ContentText>
    <ContentText>Shipping To: {billingDetails.name}</ContentText>
    <ContentText>Address: {billingDetails.address.line1}</ContentText>
    <ContentText>City: {billingDetails.address.city}</ContentText>
    <ContentText>Country: {billingDetails.address.country}</ContentText>
    <ContentText>Post Code: {billingDetails.name}</ContentText>
  </CheckoutSection>
);
