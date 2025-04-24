import { IconContainer } from "components/buttons/icon-button/IconButton.styles";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  & img {
    height: 1rem;
  }

  ${IconContainer} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0.5rem;
  }
`;
export const DropdownInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  height: 3rem;
  min-width: 86px;
  border-color: ${({ theme }) => theme.colors.mono.lightGray};
  border: 1px solid;
  text-align: left;
  & span {
    font-size: ${({ theme }) => theme.font.size.xSmall};
    padding-top: 0.4rem;
  }
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
export const DropdownItem = styled.li<{ $disabled?: boolean }>`
  padding: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  position: relative;
  font-family: ${({ theme }) => theme.font.default.family};
  font-size: ${({ theme }) => theme.font.size.xSmall};
  text-decoration: ${({ $disabled }) => ($disabled ? "line-through" : "none")};
  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? "transparent" : "#f0f0f0"};
  }
`;

export const DropdownData = styled.span`
  box-shadow: none;
  border-style: none;
  flex: 1 1 0%;
  margin: 0px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.default.family};
  color: rgb(50, 49, 48);
  background-color: rgb(255, 255, 255);
  height: 100%;
  padding: 0px 8px 0px 9px;
  outline: 0px;
  display: block;
  width: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  border-color: ${({ theme }) => theme.colors.mono.lightGray};
  border-radius: 5px;
  user-select: text;
  box-sizing: border-box;
`;
