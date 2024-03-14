import { ContentText } from "components/text/Text";
import {
  FooterCenterText,
  FooterContainer,
  FooterLink,
  FooterLinkContainer,
  FooterLinks,
} from "./Footer.styles";
import { SocialLinks } from "components/social-links/SocialLinks";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkContainer>
        <svg className="circle-svg" viewBox="0 0 100 100">
          <defs>
            <defs>
              <radialGradient
                id="enter-gradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgba(255,255,255,1)" }}
                />

                <stop
                  offset="100%"
                  style={{ stopColor: "rgba(255,255,255,1)" }}
                />
              </radialGradient>
            </defs>
          </defs>
          <circle
            stroke="white"
            vectorEffect="non-scaling-stroke"
            cx="50"
            cy="50"
            r="48"
            fill="url(#enter-gradient)"
          />
        </svg>
        <FooterLinks>
          <SocialLinks />
          <FooterLink href="/contact">
            <ContentText $isLight>Get In Touch</ContentText>
          </FooterLink>
          <FooterLink href="/terms-and-conditions">
            <ContentText $isLight>Terms And Conditions</ContentText>
          </FooterLink>
        </FooterLinks>
      </FooterLinkContainer>

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
