import styled from "styled-components";
import Image from "next/image";

export const MultiImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ThumbnailContainer = styled.div<{ $top: number; $left: number }>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ $left }) => $left - 450}px;
  justify-content: start;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    display: flex;
    margin-top: ${({ $top }) => $top + 20}px;
    margin-left: 10%;
    justify-content: center;
  }
`;

export const ThumbnailImageContainer = styled.div`
  margin-top: 1.5rem;
  height: 85px;
  width: 85px;
  position: relative;
`;
export const ThumbnailImage = styled(Image)<{ $isSelected: boolean }>`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  object-position: top;
  cursor: pointer;
  filter: brightness(${({ $isSelected }) => ($isSelected ? 50 : 100)}%);
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
