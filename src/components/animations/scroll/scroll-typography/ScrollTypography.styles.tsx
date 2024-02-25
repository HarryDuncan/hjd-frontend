import styled from "styled-components";

export const ScrolledTypographyHeader = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.font.size.large};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const ScrolledTypographyText = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-family: ${({ theme }) => theme.font.default.family};
`;
