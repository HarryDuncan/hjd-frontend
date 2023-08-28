import { ScrolledTypographyHeader } from "components/animations/scroll-typography/ScrollTypography.styled";
import { ConfigurableCardWrapper } from "components/card/Card.styles";
import styled, { css } from "styled-components";

const galleryStack = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding: 2rem;
  --offset: 1rem;
`;

export const TechTitleContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  ${ScrolledTypographyHeader} {
    font-size: 5rem;
    position: absolute;
    top: 50vh;
    text-align: center;
    width: 100%;
    color: white;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    ${ScrolledTypographyHeader} {
      font-size: 2.5rem;
      top: 30vh;
    }
  }
`;
export const TechContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TechCardBar = styled.div.attrs((props) => ({
  style: {
    justifyContent: props.$justify,
    transform: `translateX(${100 - props.$translate * 100}vw)`,
  },
}))`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  overflow-x: auto;

  ${galleryStack}
  ${ConfigurableCardWrapper} {
    height: 25vh;
    width: 35vw;
    margin: 1em;
  }
`;
