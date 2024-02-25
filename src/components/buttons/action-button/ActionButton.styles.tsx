import styled from "styled-components";

export const StyledActionButton = styled.button<{
  $disabled: boolean;
  $color?: string;
}>`
  padding: 1rem;
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
  cursor: ${({ $disabled }) => ($disabled ? "none" : "pointer")};
  font-size: ${({ theme }) => theme.font.size.mediumSmall};
  font-weight: ${({ theme }) => theme.font.weight.none};
  font-family: ${({ theme }) => theme.font.alternative.family};
  text-transform: uppercase;
  border: none;
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.mono.lightGray : "black"};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.mono.lightText : "white"};
  &:active {
    background-color: ${({ theme }) => theme.colors.mono.lightGray};
    color: black;
  }
`;
