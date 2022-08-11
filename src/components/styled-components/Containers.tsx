import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ebebeb;
  padding-top: ${NAV_HEIGHT};
  display: flex;
  padding: 2rem;
  overflow-x: hidden;
`;
