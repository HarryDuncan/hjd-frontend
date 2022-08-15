import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: calc(100vw - 4.5rem);
  min-height: 100vh;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mono.background};
  padding: 2rem;
  padding-top: ${NAV_HEIGHT};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
`;
export const ViewItemDetailsContainer = styled.div<{}>``;
