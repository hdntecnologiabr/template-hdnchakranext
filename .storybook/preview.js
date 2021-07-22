import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"

import { AppProvider } from '~/hooks';

import { theme } from '../src/styles/theme';

const withDecorators = (Story, context) => {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <Story {...context} />
      </ChakraProvider>
    </AppProvider>
  )
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withDecorators]