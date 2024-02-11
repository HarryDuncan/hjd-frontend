import { Order } from "models/dashboard/dashboard.types";
import { OrderRowContainer } from "../dashboard.styles";
import { ContentText } from "components/text/Text";

export const OrderTableRow = ({
  name,
  email,
  id,
  refId,
  orderDetails,
}: Order) => {
  return (
    <OrderRowContainer>
      <ContentText>id : {id}</ContentText>
      <ContentText>name : {name}</ContentText>
      <ContentText>email : {email}</ContentText>
      <ContentText>email : {refId}</ContentText>
    </OrderRowContainer>
  );
};
