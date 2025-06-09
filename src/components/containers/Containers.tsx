import { ParallaxImageContainer } from "components/images/parallax-image/ParallaxImage.styles";
import { NAV_HEIGHT } from "components/navigation/Navigation.styles";
import { MainTitle } from "components/text/Text";
import styled, { keyframes } from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  height: auto;
`;

export const PageContainer = styled.div<{
  $topPadding: boolean;
  $overflow?: string;
}>`
  width: 100%;
  min-height: calc(100vh - 3rem);
  margin: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mono.background};
  padding: ${({ $topPadding }) => `${$topPadding ? "5rem" : 0} 0rem`};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: ${({ $overflow }) => $overflow ?? "auto"};
  padding-bottom: 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    padding: ${({ $topPadding }) => `${$topPadding ? "3rem" : 0} 0 0 0`};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const InnerContainer = styled.div<{ $topOffset?: number }>`
  background-color: ${({ theme }) => theme.colors.mono.background};
  width: 100%;
  min-height: 80vh;
  display: block;

  z-index: 2;
  position: relative;
  animation: ${fadeIn} 2.5s ease-in-out;
  ${ParallaxImageContainer} {
    position: relative;
  }
`;

export const ViewItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 1rem;
  position: relative;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    min-height: calc(100vh - ${NAV_HEIGHT});
    padding-bottom: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 100%;
    margin: 0;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.gradients.dark};
  opacity: 0.65;
`;

export const ViewItemContent = styled.div`
  width: 30%;
  margin-left: 4rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
  }
  ${MainTitle} {
    font-size: ${({ theme }) => theme.font.size.mediumLarge};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.medium};
      margin: 1.5rem;
    }
  }
`;

export const DesktopIconContainer = styled.div`
  display: block;
  width: 50px;
  .scroll-right-icon {
    position: absolute;
    top: 50%;
  }
  .scroll-left-icon {
    position: absolute;
    top: 50%;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    display: none;
  }
`;

export const MobileIconContainer = styled.div`
  display: none;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop}px) {
    display: block;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

export const ViewItemDetails = styled.div`
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
  }
`;

export const FloatingCentralContainer = styled.div`
  position: relative;
  z-index: 10;
  margin: 0 auto;
  margin-top: ${NAV_HEIGHT};
  width: 80vw;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 100vw;
    margin-top: 3rem;
    min-height: 80vh;
    margin-bottom: 3rem;
  }
`;
export const FloatingContentContainer = styled.div`
  color: black;
  width: 80%;
  background: ${({ theme }) => theme.colors.mono.background};
  z-index: 5;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  text-align: center;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    width: 100%;
    height: calc(100vh - ${NAV_HEIGHT});
    padding: 0;
  }
`;
