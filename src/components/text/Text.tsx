import styled from "styled-components";

export const MainTitle = styled.h1<{ $isLight?: boolean }>`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.large};
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
  font-family: ${({ theme }) => theme.font.default.family};
  color: ${({ $isLight, theme }) =>
    $isLight ? theme.colors.mono.lightText : theme.colors.mono.darkText};
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  white-space: pre-wrap;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    font-size: ${({ theme }) => theme.font.size.xSmall};
  }
`;

export const ContentSubText = styled.span`
  font-family: ${({ theme }) => theme.font.default.family};
  color: ${({ theme }) => theme.colors.mono.lightGray};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  font-weight: 300;
  white-space: pre-wrap;
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.font.default.family};
`;
