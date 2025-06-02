import { ButtonText } from "components/buttons/circle-action-button/CircleActionButton.styles";
import styled from "styled-components";

export const ProductControlContainer = styled.div`
  & ${ButtonText} {
    color: white;
    font-size: ${({ theme }) => theme.font.size.mediumSmall};
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
