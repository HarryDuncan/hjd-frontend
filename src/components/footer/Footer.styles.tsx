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
  font-family: ${({ theme }) => theme.font.default.family};
  text-align: center;
  width: 80%;
  color: white;
`;
export const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 5px 5px;
  position: relative;
  text-transform: none;
  text-decoration: underline;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.default.family};
  cursor: pointer;
  color: white;
`;
