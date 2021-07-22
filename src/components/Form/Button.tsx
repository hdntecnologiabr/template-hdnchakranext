import React from 'react';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  children: React.ReactNode;
};

export function Button({ children, ...rest }: ButtonProps): React.ReactElement {
  return (
    <ChakraButton colorScheme={rest.disabled ? 'gray' : 'primary'} {...rest}>
      {children}
    </ChakraButton>
  );
}

Button.defaultProps = {
  disabled: false,
};
