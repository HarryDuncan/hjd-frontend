import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
`;
export const StyledImage = styled(Image)`
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
