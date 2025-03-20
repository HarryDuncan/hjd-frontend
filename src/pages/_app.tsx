import { Splash } from "components/loading/splash/Splash";
import { useSplash } from "components/loading/splash/useSplash";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "theme";
import { WindowStateProvider } from "visual/compat/window-state/windowStateProvider";
import RootLayout from "layout/RootLayout";
import Head from "next/head";
import { PageTransitionWrapper } from "components/animations/page-transitions/PageTransitionsWrapper";
import { ShopProvider } from "views/shop/shop-context/shop.context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>Harry J Dee</title>
        <meta
          name="Harry J Dee"
          content="The online virtual headquarters of artist and creative technologist Harry J Dee"
          key="desc"
        />
      </Head>

      <ShopProvider>
        <WindowStateProvider>
          <ThemeProvider theme={THEME}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
              <AppContent Component={Component} pageProps={pageProps} />
            </QueryClientProvider>
          </ThemeProvider>
        </WindowStateProvider>
      </ShopProvider>
    </RootLayout>
  );
}

const AppContent = ({ Component, pageProps }: Partial<AppProps>) => {
  const isSplashShowing = useSplash();

  if (Component && !isSplashShowing) {
    return (
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    );
  }
  return <Splash isVisible={isSplashShowing} />;
};

export default MyApp;
