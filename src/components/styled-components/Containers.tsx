import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100%;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mono.background};
  padding: ${NAV_HEIGHT} 0rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    padding: ${NAV_HEIGHT} 0rem;
    padding-bottom: 0;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    padding: ${NAV_HEIGHT} 0.5rem;
    padding-bottom: 0;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    padding: ${NAV_HEIGHT} 0.5rem;
    padding-bottom: 0;
  }
`;

export const InnerContainer = styled.div<{ $topOffset?: number }>`
  background-color: ${({ theme }) => theme.colors.mono.background};
  width: 100%;
  display: block;
  margin-top: ${({ $topOffset }) => $topOffset ?? 0}px;
  z-index: 2;
`;

export const ViewItemContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.background};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(100vh - ${NAV_HEIGHT});
  width: 95%%;
  margin: 0 2.5% 2.5% 0;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}px) {
    flex-direction: column;
  }
`;
export const ViewItemDetailsContainer = styled.div<{}>`
  margin: 0 auto;
  text-align: center;
`;
