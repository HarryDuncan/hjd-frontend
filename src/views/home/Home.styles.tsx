import { MainTitle } from "components/text/Text";
import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  from {
    height: 0;
  }
  to {
    height:5rem;
  }
`;

export const HomeContainerBottom = styled.div`
  width: 10vw;
  position: absolute;
  bottom: 0;
  left: calc(50% - 5vw);
  height: 0vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gradients.dark};
  z-index: 900;
  display: flex;
  border-radius: 1000px;
  animation: ${growDown} 1s ease-in-out 1.5s forwards;
  ${MainTitle} {
    font-size: ${({ theme }) => theme.font.size.mediumLarge};
    margin: 0 auto;
  }
`;
