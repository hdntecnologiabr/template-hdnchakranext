import React from 'react';
import { FaBell, FaBook } from 'react-icons/fa';

import { HStack, IconButton, Icon } from '@chakra-ui/react';

export function Notifications(): React.ReactElement {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth="1px"
      borderColor="gray.700"
    >
      <IconButton
        fontSize="20"
        minW="0"
        variant="unstyled"
        aria-label="Open bell"
        icon={
          <Icon
            as={FaBell}
            fontSize="20"
            color="primary.500"
            _hover={{ color: 'primary.600' }}
          />
        }
      />
      <IconButton
        fontSize="20"
        minW="0"
        variant="unstyled"
        aria-label="Open bell"
        icon={
          <Icon
            as={FaBook}
            fontSize="20"
            color="primary.500"
            _hover={{ color: 'primary.600' }}
          />
        }
      />
    </HStack>
  );
}
