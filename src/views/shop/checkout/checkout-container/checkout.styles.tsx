import { ContentText } from "components/text/Text";
import styled from "styled-components";

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
  margin: 0 1rem;
  img {
    height: 1rem !important;
    margin-left: 1rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    flex-direction: column;
    justify-content: space-between;
    .trash-icon {
      margin-bottom: 1rem;
      width: 100%;
    }
    img {
      float: right;
    }
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
  min-width: 30rem;

  margin: 0 auto;
  text-align: left;
  margin-bottom: 0.5rem;
  ${ContentText} {
    font-size: ${({ theme }) => theme.font.size.small};
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
    font-weight: ${({ theme }) => theme.font.weight.normal};
    margin: 0;
  }
`;

export const CheckoutTitleContainer = styled.div`
  height: 15vh;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    height: 8vh;
  }
`;
