import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      500: '#000',
      600: '#1F2029',
    },
    secondary: {
      500: '#006EFF',
      600: '#0061E1',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'primary.500',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
      button: {
        color: 'white',
      },
      input: {
        _placeholder: {
          color: 'gray.100',
        },
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
  },
});
