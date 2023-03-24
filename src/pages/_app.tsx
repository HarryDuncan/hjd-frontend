import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";
import { store } from "redux/store";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const isSplashShowing = useSplash();
  return (
    <>
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <Splash isVisible={isSplashShowing} />
            <Component {...pageProps} />
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
