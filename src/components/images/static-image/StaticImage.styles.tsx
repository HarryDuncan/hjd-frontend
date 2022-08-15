import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 40%;
  height: 500px;
  position: relative;
`;
export const StyledImage = styled(Image)`
  min-height: 500px;
  width: 50%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
