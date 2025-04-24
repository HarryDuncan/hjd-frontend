import styled from "styled-components";

export const SVGButtonContainer = styled.button<{
  disabled?: boolean;
  isDark?: boolean;
}>`
  height: 6rem;
  width: 24rem;
  position: relative;
  padding: 0;
  margin: 0 auto;
  margin-top: 4rem;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "gray" : "inherit")};
  svg {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const ButtonTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
