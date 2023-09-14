import styled from "styled-components";

export const TransitionEffectContainer = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

export const BackgroundLayer = styled.div<{
  $backgroundImage: string;
}>`
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("${({ $backgroundImage }) => $backgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1;
  filter: brightness(90%);
`;
export const SoftFadeContainer = styled.div`
  overflow: "hidden";
`;
