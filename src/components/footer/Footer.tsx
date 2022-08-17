import { FooterCenterText, FooterContainer, FooterLink } from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="mailto: harry@harryjdee.com">Get In Touch</FooterLink>
      <FooterLink href="/terms-and-conditions">Terms and Conditions</FooterLink>

      <FooterCenterText>
        <p>
          Harry J Dee acknowledges the traditional custodians of the lands on
          which he works, the Wurundjeri people of the Kulin Nation. We pay our
          respects to Elders past, present and emerging. Harry J Dee
          acknowledges that sovereignty has never been ceded
        </p>
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
