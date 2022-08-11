import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "HarryDuncan";
  font-style: normal;
  font-weight: 100;
  src: local("HarryDuncan");
  src: url("/fonts/Harryduncan.eot");
  src: url("/fonts/Harryduncan.otf") format("opentype");
  src: url(/fonts/HarryDuncan.woff), format("woff");
  src: url(/fonts/HarryDuncan.ttf") format("truetype"); /* Safari, Android, iOS */
}
  body {
    
  }
  
 h1 { font-family : 'HarryDuncan'}
 h2 { font-family : 'HarryDuncan'}
`;
