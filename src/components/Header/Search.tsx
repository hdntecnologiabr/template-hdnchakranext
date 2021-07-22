import React, { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import { Flex, Input, Icon } from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';

export function Search(): React.ReactElement {
  const searchInputRef = useRef(null);

  const { isSidebarClosed } = useSidebarDrawer();

  return (
    <Flex
      as="label"
      bg="white"
      flex="1"
      h="10"
      px="2"
      maxW="400px"
      alignSelf="center"
      position="relative"
      borderRadius="4px"
      ml={isSidebarClosed && '36'}
      transition="margin-left 0.5s ease"
    >
      <Icon as={RiSearchLine} fontSize="20" mr="4" alignSelf="center" />
      <Input
        color="primary.500"
        variant="unstyled"
        placeholder="Pesquisa"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />
    </Flex>
  );
}
