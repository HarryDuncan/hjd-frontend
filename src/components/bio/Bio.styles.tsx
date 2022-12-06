import styled from "styled-components";

export const TextContainer = styled.div`
  position: absolute;
  width: 80%;
  top: 20%;
  color: white;
  left: 10%;
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

export const BioPage = styled.div`
  width: 95%;
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
`;
