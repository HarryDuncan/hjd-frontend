import { ContentText } from "components/text/Text";
import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  color: black;
  width: 50%;
  background: white;
  border-radius: 5px;
  z-index: 5;
  margin: 1rem auto;
  padding: 1rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 80%;
  }
`;

export const CartTableRow = styled.div`
  display: flex;
  border-bottom : 1px solid black;
  padding : 1rem;
  justify-content : center;
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
`;
export const TableImageContainer = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
`;

export const CheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${ContentText} {
    font-size: ${({ theme }) => theme.font.size.xSmall};
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 20%;
  p {
    margin: 0;
  }
`;
