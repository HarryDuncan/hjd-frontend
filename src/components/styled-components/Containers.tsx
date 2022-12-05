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
  padding: ${({ $topPadding }) => `${$topPadding ? NAV_HEIGHT : 0} 0rem`};
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
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
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
    padding-bottom: 1rem;
  }
`;
export const ViewItemDetailsContainer = styled.div<{}>`
  margin: 0 auto;
  text-align: center;
  width: 50%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    width: 100%;
  }
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
