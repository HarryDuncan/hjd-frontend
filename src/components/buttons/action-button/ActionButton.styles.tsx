import styled from "styled-components";

export const ActionButton = styled.button<{
  $disabled?: boolean;
  color?: string;
}>`
  disabled: ${({ $disabled }) => $disabled ?? false};
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};
  border: none;
  &:active {
    background-color: ${({ theme }) => theme.colors.mono.lightGray};
    color: black;
  }
`;
