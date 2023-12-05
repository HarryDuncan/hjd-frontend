import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  color: white;
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
    font-size: ${({ theme }) => theme.font.size.medium};
    text-transform : uppercase;
  }
`;
