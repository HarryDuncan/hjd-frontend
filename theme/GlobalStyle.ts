import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Harryduncan";
  font-style: normal;
  font-weight: 100;
  src: url(/fonts/Harryduncan.woff2), format("woff2");
  src: url("/fonts/Harryduncan.eot");
  src: url("/fonts/Harryduncan.otf") format("opentype");
  src: url(/fonts/Harryduncan.ttf") format("truetype"); /* Safari, Android, iOS */
}
  body {
    
  }
  
 h1 { font-family : 'Harryduncan'}
 h2 { font-family : 'Harryduncan'}
`;
