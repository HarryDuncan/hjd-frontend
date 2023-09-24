import styled from "styled-components";

export const MainTitle = styled.h1<{ $isLight?: boolean }>`
  text-transform: uppercase;
  font-size: 4rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  pointer-events: none;
  position: relative;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const ContentText = styled.span<{ $isLight?: boolean }>`
  font-family: arial;
  color: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.mono.lightText : theme.colors.mono.darkText};
  font-size: 1.5rem;
  font-weight: 600;
  white-space: pre-wrap;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    font-size: 1rem;
  }
`;

export const ContentSubText = styled.span`
  font-family: arial;
  color: ${({ theme }) => theme.colors.mono.lightGray};
  font-size: 1rem;
  font-weight: 300;
  white-space: pre-wrap;
`;

export const Label = styled.span`
  font-family: arial;
`;
