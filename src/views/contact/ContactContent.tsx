import { ActionButton } from "components/buttons/action-button/ActionButton";
import { FloatingContentContainer } from "components/containers/Containers";
import { TextInput } from "components/inputs/text-input/TextInput";
import { FloatingContentNavigation } from "components/navigation/floating-content-navigation/FloatingContentNavigation";
import { ContentText, MainTitle } from "components/text/Text";
import { useMemo, useState } from "react";
import { ContactData } from "./contact.types";
import { sendContactMessage } from "services/contact/sendContactMessage";

export const ContactContent = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const onEmailChange = (value: string) => {
    setEmail(value);
  };
  const onSubjectChange = (value: string) => {
    setSubject(value);
  };
  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const isDisabled = useMemo(
    () => !email || !subject || !message,
    [email, subject, message]
  );

  const [messageStatus, setMessageStatus] = useState<null | string>(null);
  const onSubmit = async () => {
    const contactData = {
      email,
      subject,
      message,
    } as ContactData;
    const response = await sendContactMessage(contactData);
    console.log(response);
    if (response.data.success) {
      setMessageStatus("success");
    }
  };
  return (
    <FloatingContentContainer>
      <FloatingContentNavigation navigationRoutes={["home"]} />
      <MainTitle>Get In TOUCH</MainTitle>
      {messageStatus === null && (
        <>
          <TextInput label={"Email"} required={true} onChange={onEmailChange} />
          <TextInput
            label={"Subject"}
            required={true}
            onChange={onSubjectChange}
          />
          <TextInput
            label={"Message"}
            required={true}
            multiLine={true}
            onChange={onMessageChange}
          />
          <ActionButton
            title={"Submit"}
            isDisabled={isDisabled}
            onClick={onSubmit}
          />
        </>
      )}
      {messageStatus === "success" && (
        <ContentText>Your message has been sent</ContentText>
      )}
      {messageStatus === "error" && (
        <ContentText>There was an error sending your message</ContentText>
      )}
    </FloatingContentContainer>
  );
};
