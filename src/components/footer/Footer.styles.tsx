import { ContentText } from "components/styled-components/Text";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  position: relative;
  background: ${({ theme }) => theme.colors.mono.background};
  color: white;
  height: auto;
  padding-top: 3rem;
`;

export const FooterCenterText = styled.div`
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 0.2em;
  padding: 2rem 5px;
  position: relative;
  margin: 0 auto;
  font-family: arial;
  text-align: center;
  width: 80%;
`;
export const FooterLink = styled.a`
  color: black;
  text-decoration: none;
  letter-spacing: 0.2em;
  padding: 5px 5px;
  position: relative;
  text-transform: none;
  text-decoration: underline;
  margin: 0 auto;
  font-family: arial;
  cursor: pointer;
`;
