import { ContentText } from "components/text/Text";
import {
  FooterCenterText,
  FooterContainer,
  FooterLink,
  FooterLinks,
} from "./Footer.styles";
import { SocialLinks } from "components/social-links/SocialLinks";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <SocialLinks />
        <FooterLink href="/contact">
          <ContentText $isLight>Get In Touch</ContentText>
        </FooterLink>
        <FooterLink href="/terms-and-conditions">
          <ContentText $isLight>Terms And Conditions</ContentText>
        </FooterLink>
      </FooterLinks>

      <FooterCenterText>
        <ContentText $isLight>
          Harry J Dee acknowledges the traditional custodians of the lands on
          which he works, the Wurundjeri people of the Kulin Nation. We pay our
          respects to Elders past, present and emerging. Harry J Dee
          acknowledges that sovereignty has never been ceded
        </ContentText>
      </FooterCenterText>
    </FooterContainer>
  );
};
