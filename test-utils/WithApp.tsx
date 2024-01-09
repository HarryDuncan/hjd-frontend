import { PropsWithChildren } from "react";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import { WithStore } from "./WithStore";

export type WithAppProps = PropsWithChildren<{
  storeProps?: Parameters<typeof WithStore>[0];
  apolloProps?: MockedProviderProps;
}>;

export const WithApp = ({
  children,
  storeProps,
  apolloProps,
}: WithAppProps) => {
  //   const queryClient = useRef(
  //     new QueryClient({
  //       defaultOptions: { queries: { retry: false } },
  //       logger: {
  //         log: console.log,
  //         warn: console.warn,
  //         // don't log errors in tests
  //         error: () => {},
  //       },
  //     })
  //   );

  //  <QueryClientProvider client={queryClient.current}>
  // </QueryClientProvider>

  return (
    <MockedProvider {...apolloProps}>
      <WithStore {...storeProps}>{children}</WithStore>
    </MockedProvider>
  );
};
