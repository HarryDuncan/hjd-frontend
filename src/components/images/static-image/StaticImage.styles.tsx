import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 90%;
  width: 40%;
  margin-left: 10%;
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-left: 0%;
    min-height: 70vh;
    max-height: 70vh;
    margin-top: 1.5em;
  }
`;
export const StyledImage = styled(Image)`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
