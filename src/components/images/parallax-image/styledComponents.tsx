import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: calc(100% - 4rem);
  height: 200px;
  position: fixed;
`;
export const StyledImage = styled(Image)`
  background-image: url("../images/art/8Bytes.jpg");

  /* Set a specific height */
  min-height: 500px;
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: brightness(50%);
`;
