import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  color: black;
  background: white;
  border-radius: 5px;
  z-index: 5;
  margin: 0 auto;
  padding: 1rem;
  table{
    width: 100%;
  }
  th {
    font-family: ${({ theme }) => theme.font.alternative.family};
    font-weight ${({ theme }) => theme.font.weight.light};
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.small};
    text-transform : uppercase;
  }
  tr {
    border-bottom : 1px solid black;
  }
  td {
    font-family: ${({ theme }) => theme.font.default.family};
    font-weight ${({ theme }) => theme.font.weight.light};
    text-align: left;
    font-size: ${({ theme }) => theme.font.size.xSmall};
 
  }
`;

export const CheckoutSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;
