import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  padding: 8px;
  width: 150px;
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  font-size: ${({ theme }) => theme.font.size.xSmall};
`;

export const DropdownInput = styled.input``;
export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.default.family};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  &:hover {
    background-color: #f0f0f0;
  }
`;
