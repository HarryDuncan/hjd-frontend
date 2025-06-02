import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div<{
  $height: number | undefined;
  $width: number | undefined;
}>`
  height: 100%;
  width: ${({ $width }) => `${$width}px`};
  position: relative;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    margin: 0 auto;
    flex-direction: column;
    width: 100%;
    height: ${({ $height }) => ($height ? `${$height}px` : "50rem")};
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    height: ${({ $height }) => ($height ? `${$height}px` : "30rem")};
  }
`;
export const StyledImage = styled(Image)`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  object-position: top;
  margin: 0 auto;
  margin-top: 1.5rem;
  height: auto !important;
  width: auto !important;
  max-width: 45rem;
  max-height: 45rem;

  -webkit-box-shadow: 15px 15px 16px #ccc;
  -moz-box-shadow: 15px 15px 16px #ccc;
  box-shadow: 15px 15px 16px #ccc;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    margin-top: 0;
    max-height: 40rem;
    max-width: 40rem;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: auto !important;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    margin-top: 0;
    width: auto !important;
    max-height: 40rem;
    max-width: 100vw;
  }
`;
