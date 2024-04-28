import styled from "styled-components";

export const StyledInput = styled.input`
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
  cursor: text;
  border-color: ${({ theme }) => theme.colors.mono.lightGray};
  border-radius: 5px;
  user-select: text;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;
export const StyledLabel = styled.span`
  text-align: left;
  margin: 10px;
  font-size: ${({ theme }) => theme.font.size.small};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.default.family};
  & span {
    color: red;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
