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
    min-height: 30rem;
    max-height: 30rem;
  }
`;
export const StyledImage = styled(Image)`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  object-position: top;
  margin-top: 1.5rem;
`;
