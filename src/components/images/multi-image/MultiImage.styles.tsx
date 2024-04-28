import styled from "styled-components";
import Image from "next/image";

export const MultiImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
`;

export const ThumbnailImage = styled(Image)`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  object-position: top;
  margin: 0 auto;
  margin-top: 1.5rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    margin-top: 0;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: auto !important;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    margin-top: 0;
    width: auto !important;
  }
`;
