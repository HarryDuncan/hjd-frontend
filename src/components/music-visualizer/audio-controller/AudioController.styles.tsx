import { NAV_HEIGHT } from "components/navigation/styledComponents";
import styled from "styled-components";

export const AudioControllerContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: flex-start;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: ${NAV_HEIGHT};
  z-index: 300;
  padding-left: 4%;
  padding-right: 4%;
  background: ${({ theme }) => theme.colors.gradients.dark}
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const ControlButtonContainer = styled.div`
  cursor: pointer;
`;
