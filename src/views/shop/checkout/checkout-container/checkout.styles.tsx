import { NAV_HEIGHT } from "components/navigation/Navigation.styles";
import { ContentText } from "components/text/Text";
import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  color: black;
  width: 80%;
  background: white;
  z-index: 5;
  margin: 0 auto;
  overflow: hidden;
  padding: 3rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 100%;
    height: calc(100vh - ${NAV_HEIGHT});
    padding: 0;
  }
`;

export const CartTableRow = styled.div`
  display: flex;
  border-bottom : 1px solid black;
  padding : 0.2rem 0rem ;
  justify-content : space-between;
  font-family: ${({ theme }) => theme.font.default.family};
  font-weight ${({ theme }) => theme.font.weight.light};
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.xSmall};
`;

export const CartTableControl = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  img {
    height: 30px;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const TableImageContainer = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
`;

export const CheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  min-width: 25rem;
  width: 20vw;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  ${ContentText} {
    font-size: ${({ theme }) => theme.font.size.xSmall};
  }
  form {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    max-width: 100%;
    min-width: 80%;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 1rem;
  min-width: 20%;
  p {
    margin: 0;
  }
`;

export const CheckoutTitleContainer = styled.div`
  height: 20vh;
  position: relative;
`;

export const CheckoutNavigationContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
