import styled from "styled-components";

export const StyledActionButton = styled.button<{
  $disabled: boolean;
  color?: string;
}>`
  padding: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  border: none;
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.mono.lightGray : "black"};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.mono.darkText : "white"};
  &:active {
    background-color: ${({ theme }) => theme.colors.mono.lightGray};
    color: black;
  }
`;
