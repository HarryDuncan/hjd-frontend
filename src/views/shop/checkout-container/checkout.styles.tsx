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
    font-family: var(--font-hjd);
    font-weight ${({ theme }) => theme.font.weight.light};
    text-align: left;
    font-size: 1.5rem;
    text-transform : uppercase;
  }
`;
