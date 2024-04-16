import {
  ButtonText,
  CircleButton,
} from "components/buttons/circle-action-button/CircleActionButton.styles";
import styled from "styled-components";

export const ProductControlContainer = styled.div`
  margin: 3rem;
  & ${CircleButton} {
    z-index: 0;
  }
  & ${ButtonText} {
    color: white;
    font-size: ${({ theme }) => theme.font.size.mediumSmall};
  }
`;
