import { ContentText } from "components/styled-components/Text";
import { FooterCenterText, FooterContainer, FooterLink } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="mailto: harry@harryjdee.com">
        <ContentText>Get In Touch</ContentText>
      </FooterLink>
      <FooterLink href="/terms-and-conditions">
        <ContentText>Terms And Conditions</ContentText>
      </FooterLink>

      <FooterCenterText>
        <ContentText>
          Harry J Dee acknowledges the traditional custodians of the lands on
          which he works, the Wurundjeri people of the Kulin Nation. We pay our
          respects to Elders past, present and emerging. Harry J Dee
          acknowledges that sovereignty has never been ceded
        </ContentText>
      </FooterCenterText>
    </FooterContainer>
  );
};

//   <div className="footer-center-home">
//           <ExternalLinkWidget
//             links={[
//               { url: "https://www.instagram.com/harry.j.dee/" },
//               { url: "https://www.soundcloud.com/harry-j-dee" },
//             ]}
//           />
//           <p>© Harry J Dee All Rights Reserved</p>
//         </div>
