import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";
import { WindowStateProvider } from "visual/compat/window-state/windowStateProvider";
import { useIsServerRunning } from "hooks/useIsServerRunning";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WindowStateProvider>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AppContent Component={Component} pageProps={pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </WindowStateProvider>
  );
}

const AppContent = ({ Component, pageProps }) => {
  const isSplashShowing = useSplash();
  useIsServerRunning();
  return (
    <>
      <Splash isVisible={isSplashShowing} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
