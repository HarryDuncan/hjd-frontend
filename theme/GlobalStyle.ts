import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gradients.dark};

  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.mono.background};

  }
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
    margin: 0;
  }
  
 h1 { font-family : 'Harryduncan'}
 h2 { font-family : 'Harryduncan'}
 
 @media only screen and (max-width: ${({ theme }) =>
   theme.breakpoints.tablet}px) {
    ::-webkit-scrollbar {
    width: 2px;
  }
      }
`;
