import styled from "styled-components";

export const TextContainer = styled.div`
  position: relative;
  padding: 10%;
  width: 80%;
  color: white;
  text-align: center;
  pointer-events: none;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 95%;
    top: 0%;
    color: white;
    left: 2.5%;
  }
`;

export const BioContentContainer = styled.div<{ $index: number }>`
  display: flex;
  flex-direction: ${({ $index }) => ($index % 2 === 0 ? "row" : "row-reverse")};
`;

export const BioPage = styled.div`
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
