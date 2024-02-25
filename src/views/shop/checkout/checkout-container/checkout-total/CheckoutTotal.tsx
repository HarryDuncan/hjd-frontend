import { ContentSubText, ContentText } from "components/text/Text";
import { CheckoutSection } from "../checkout.styles";

interface CheckoutTotalProps {
  total: number;
}
export const CheckoutTotal = ({ total }: CheckoutTotalProps) => {
  return (
    <CheckoutSection>
      <ContentText>Total:${total} AUD</ContentText>
      <ContentSubText>Tax and gst included</ContentSubText>
    </CheckoutSection>
  );
};
