import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";
import { WindowStateProvider } from "visual/compat/window-state/windowStateProvider";
import RootLayout from "layout/RootLayout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <WindowStateProvider>
        <ThemeProvider theme={THEME}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <AppContent Component={Component} pageProps={pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </WindowStateProvider>
    </RootLayout>
  );
}

const AppContent = ({ Component, pageProps }: Partial<AppProps>) => {
  const isSplashShowing = useSplash();

  if (Component) {
    return (
      <>
        <Splash isVisible={isSplashShowing} />
        <Component {...pageProps} />
      </>
    );
  }
  return null;
};

export default MyApp;
