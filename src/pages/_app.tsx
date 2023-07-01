import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";
import { WindowStateProvider } from "visual/compat/window-state/windowStateProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const isSplashShowing = useSplash();

  return (
    <WindowStateProvider>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Splash isVisible={isSplashShowing} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </WindowStateProvider>
  );
}

export default MyApp;
