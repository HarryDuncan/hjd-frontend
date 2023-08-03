import { ConfigurableCardWrapper } from "components/card/Card.styles";
import styled from "styled-components";
export const TechTitleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
export const TechContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TechCardBar = styled.div<{ $justify: string }>`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  overflow-x: auto;
  justify-content: ${({ $justify }) => $justify};
  ${ConfigurableCardWrapper} {
    height: 25vh;
    width: 35vw;
    margin: 1em;
  }
`;
