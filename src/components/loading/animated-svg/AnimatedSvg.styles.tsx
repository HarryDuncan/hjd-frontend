import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  position: absolute;
  left: calc(50% - 250px);
  top: calc(40% - 250px);
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 400px;
    left: calc(50% - 200px);
    top: calc(40% - 200px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 300px;
    left: calc(50% - 150px);
    top: calc(40% - 150px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
    width: 200px;
    left: calc(50% - 100px);
    top: calc(40% - 100px);
  }
`;

export const ImageLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 100px);
`;
