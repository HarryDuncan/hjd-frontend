import { Order } from "models/dashboard/dashboard.types";
import { OrderRowContainer } from "../dashboard.styles";
import { ContentText } from "components/text/Text";

export const OrderTableRow = ({ name, email, id }: Order) => {
  return (
    <OrderRowContainer>
      <ContentText>id</ContentText>
      <ContentText>name</ContentText>
      <ContentText>email</ContentText>
    </OrderRowContainer>
  );
};
