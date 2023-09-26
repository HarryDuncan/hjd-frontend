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
  
  .overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    background: ${({ theme }) => theme.colors.gradients.dark}
    width: "100%";
    height: "100%";
    img {
      position: absolute;
      left: calc(50vw - 20rem);
      width: 40rem;
      top: 20%;
      @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
        width: 20rem;
        left: calc(50vw - 10rem);
      }
    }
  }
`;

export const SoftFadeContainer = styled.div`
  overflow: "hidden";
`;
