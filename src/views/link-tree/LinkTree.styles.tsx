import { MainTitle } from "components/text/Text";
import styled from "styled-components";

export const LinkItemOverlay = styled.div`
  background: ${({ theme }) => theme.colors.gradients.dark};
  opacity: 0.75;
  padding: 1rem;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;
export const LinkItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  justify-content: center;
  margin-top: 5rem;
`;
export const LinkTreeItem = styled.div`
  z-index: 4;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 1rem;
  width: 90%;
  & a {
    text-decoration: none;
  }
  ${MainTitle} {
    font-weight: 100;
    font-size: ${({ theme }) => theme.font.size.medium};

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}px) {
      font-size: ${({ theme }) => theme.font.size.mediumSmall};
    }
  }
`;
