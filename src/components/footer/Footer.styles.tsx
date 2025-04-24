import { ContentText } from "components/text/Text";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  position: relative;
  background: ${({ theme }) => theme.colors.gradients.dark};
  color: white;
  height: auto;
  padding-top: 3rem;
  color: white;
  ${ContentText} {
    color: white;
  }
`;

export const FooterCenterText = styled.div`
  font-size: ${({ theme }) => theme.font.size.xSmall};
  text-decoration: none;
  padding: 2rem 5px;
  position: relative;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.alternative.family};
  text-align: center;
  width: 80%;
  color: white;
  ${ContentText} {
    font-size: ${({ theme }) => theme.font.size.xSmall};
  }
`;
export const FooterLink = styled.a`
  padding: 5px 5px;
  position: relative;
  text-transform: none;
  text-decoration: underline;
  margin: 0 auto;
  cursor: pointer;
  color: black;
  ${ContentText} {
    font-family: ${({ theme }) => theme.font.alternative.family};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.medium};
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`;
export const FooterLinkContainer = styled.div`
  ${ContentText} {
    color: black;
    text-align: center;
    font-family: ${({ theme }) => theme.font.alternative.family};
    font-size: ${({ theme }) => theme.font.size.small};
  }
  text-align: center;
`;
