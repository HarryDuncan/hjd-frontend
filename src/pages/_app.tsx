import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, THEME } from "../../theme";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <DynamicNavigation />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
