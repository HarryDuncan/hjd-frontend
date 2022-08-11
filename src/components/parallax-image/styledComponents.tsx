import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
`;
export const StyledImage = styled.img`
  background-image: url("../images/art/8Bytes.jpg");

  /* Set a specific height */
  min-height: 500px;
  width: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
