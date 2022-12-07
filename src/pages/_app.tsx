import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const isSplashShowing = useSplash();
  return (
    <>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Splash isVisible={isSplashShowing} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
