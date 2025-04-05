import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  padding: 20px;
  color: white;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.05em;
  font-size: ${({ theme }) => theme.font.size.mediumSmall};
  font-weight: 300;
`;
