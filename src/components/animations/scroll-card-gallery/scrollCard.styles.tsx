import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  place-items: center;
  padding: 2rem;
  width: 100%;
  perspective: var(--perspective);
  height: 100vh;
`;

export const GridWrap = styled.div`
  height: var(--grid-height);
  width: var(--grid-width);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: var(--grid-gap);
  transform-style: preserve-3d;
`;
export const ScrollCard = styled.div`
  width: 5rem;
  height: 18rem;
  color: white;
  background-color: black;
`;
