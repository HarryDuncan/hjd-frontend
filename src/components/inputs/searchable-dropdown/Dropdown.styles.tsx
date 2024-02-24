import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownInput = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  height: 32px;
  min-width: 86px;
  border-color: ${({ theme }) => theme.colors.mono.lightGray};
  border: 1px solid;
  text-align: left;
`;
export const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 5;
  text-align: left;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  overflow: auto;
  height: 200px;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  position: relative;
  font-family: ${({ theme }) => theme.font.default.family};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  &:hover {
    background-color: #f0f0f0;
  }
`;
