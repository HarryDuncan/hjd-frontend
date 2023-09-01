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
    max-height: 50rem;
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
  max-width: 50rem;
  max-height: 50rem;

  -webkit-box-shadow: 15px 15px 16px #ccc;
  -moz-box-shadow: 15px 15px 16px #ccc;
  box-shadow: 15px 15px 16px #ccc;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    margin-top: 0;
  }
`;
