import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import  { AppProvider } from '~/hooks'

import { theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ChakraProvider>
  )
}

export default MyApp
