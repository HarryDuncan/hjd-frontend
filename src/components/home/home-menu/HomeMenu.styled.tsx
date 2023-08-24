import { MainTitle } from "components/styled-components/Text";
import styled, { keyframes } from "styled-components";

const runner = keyframes`
  to {
		transform: translateX(-25%);
	}
`;

export const HomeMenuContainer = styled.div`
  overflow: hidden;
`;
export const TileContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100vh;
  display: flex;
  opacity: 0.7;
  flex-direction: column;
  justify-content: center;
  transform: translate3d(-50%, -50%, 0) rotate(22.5deg);
`;
export const TileLine = styled.div`
  display: flex;
  transform: translateX(25%);
  animation: ${runner} 10s linear infinite;
  :nth-child(2) {
    animation-duration: 16s;
  }
  :nth-child(3) {
    animation-duration: 22s;
  }
`;

export const TileImage = styled.div<{
  $backgroundUrl: string;
  $large?: boolean;
}>`
  background: url("${({ $backgroundUrl }) => $backgroundUrl}");
  --tile-margin: 3vw;
  flex: none;
  width: ${({ $large }) => ($large ? "100vh" : "30vh")};
  height: 30vh;
  margin: var(--tile-margin);
  background-size: cover;
  background-position: 50% 50%;
  border-radius: ${({ $large }) => ($large ? "20vh" : "50%")};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeMenuLink = styled(MainTitle)`
  font-size: 10rem;
  cursor: pointer;
  pointer-events: all;
  --thickness-deco: 2px;
  --color-deco: black;
  :hover .line {
    opacity: 1;
  }
  .line {
    outline: 120px solid transparent;
    opacity: 0;
    pointer-events: none;

    left: 0;
    height: var(--thickness-deco);
    width: 100%;
    background: var(--color-deco);
  }
`;

export const HoveredLine = styled.div``;
