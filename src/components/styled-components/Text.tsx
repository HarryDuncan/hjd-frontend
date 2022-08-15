import styled from "styled-components";

export const MainTitle = styled.h1<{ $isDark: boolean }>`
  text-transform: uppercase;
  font-size: 3.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  background: ${({ $isDark, theme }) =>
    $isDark
      ? theme.colors.gradients.darkText
      : theme.colors.gradients.lightText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContentText = styled.span``;
