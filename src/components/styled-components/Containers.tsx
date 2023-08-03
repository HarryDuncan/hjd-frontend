import { ParallaxImageContainer } from "components/images/parallax-image/styledComponents";
import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

export const PageContainer = styled.div<{ $topPadding: boolean }>`
  width: 100%;
  min-height: 100%;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mono.background};
  padding: ${({ $topPadding }) => `${$topPadding ? "5rem" : 0} 0rem`};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 0;
`;

export const InnerContainer = styled.div<{ $topOffset?: number }>`
  background-color: ${({ theme }) => theme.colors.mono.background};
  width: 100%;
  display: block;
  margin-top: ${({ $topOffset }) => $topOffset ?? 0}px;
  z-index: 2;
  position: relative;
  ${ParallaxImageContainer} {
    position: relative;
  }
`;

export const ViewItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(100vh - ${NAV_HEIGHT});
  width: 95%;
  margin: 0 2.5%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    flex-direction: column;
    height: auto;
    min-height: calc(100vh - ${NAV_HEIGHT});
    padding-bottom: 1rem;
    justify-content: flex-start;
  }
`;
export const ViewItemDetailsContainer = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 3.5rem;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const FullScreenAnimationContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.gradients.dark};
  opacity: 0.65;
`;
