import styled from "styled-components";

export const ActionButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.font.size.large};
  border: none;
  &:active {
    background-color: ${({ theme }) => theme.colors.mono.lightGray};
    color: black;
  }
`;
