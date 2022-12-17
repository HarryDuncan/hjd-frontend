import styled from "styled-components";

export const MainTitle = styled.h1<{ $isLight?: boolean }>`
  text-transform: uppercase;
  font-size: 4.5rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  pointer-events: none;
  position: relative;
  background: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.gradients.light : theme.colors.gradients.dark};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight ${({ theme }) => theme.font.weight.light}
`;

export const ContentText = styled.span<{ $isLight?: boolean }>`
  font-family: arial;
  color: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.mono.lightText : theme.colors.mono.darkText};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
  white-space: pre-wrap;
`;

export const ContentSubText = styled.span`
  font-family: arial;
  color: ${({ theme }) => theme.colors.mono.lightGray};
  font-size: 1rem;
  letter-spacing: 0.2rem;
  font-weight: 300;
  white-space: pre-wrap;
`;

export const Label = styled.span`
  font-family: arial;
`;
