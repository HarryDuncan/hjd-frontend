import { Order } from "models/dashboard/dashboard.types";
import { OrderRowContainer } from "../dashboard.styles";
import { ContentText } from "components/text/Text";
import { TextInput } from "components/inputs/text-input/TextInput";
import { useState } from "react";
import { updateOrder } from "services/dashboard/updateOrder";

export const OrderTableRow = ({
  name,
  email,
  id,
  refId,
  status,
  orderDetails,
}: Order) => {
  const [shippingCompany, setShippingCompany] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  const onShippingCompanyChange = (newValue: string) => {
    setShippingCompany(newValue);
  };
  const onTrackingNumberChange = (newValue: string) => {
    setTrackingNumber(newValue);
  };
  const submit = async () => {
    const orderUpdateData = {
      id,
      shippingData: {
        shippingCompany,
        trackingNumber,
      },
      status: "Dispatched",
    };
    const { success } = await updateOrder(orderUpdateData);
    console.log(success);
  };
  return (
    <OrderRowContainer>
      <ContentText>{id}</ContentText>
      <ContentText> {name}</ContentText>
      <ContentText>{email}</ContentText>
      <ContentText>{status}</ContentText>
      <ContentText> {refId}</ContentText>
      <TextInput
        placeholder={""}
        label={"Shipping Company"}
        onChange={onShippingCompanyChange}
      />
      <TextInput
        placeholder={""}
        label={"Tracking Number"}
        onChange={onTrackingNumberChange}
      />
      <button onClick={submit}>Submit Order</button>
    </OrderRowContainer>
  );
};
