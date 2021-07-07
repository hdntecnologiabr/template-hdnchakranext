import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { Header } from '~/components/Header';
import { Sidebar } from '~/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <Flex w="100vw" h={['100%', '100%', '100%', '100vh']}>
      <Sidebar />
      <Flex w="100%">
        <Box
          position="absolute"
          top="0"
          left="0"
          bg="gray.100"
          w="100vw"
          h="300px"
          zIndex="-1"
          transition="all 0.2s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        />
        <Flex w="100%" flexDir="column" px={['4', '4', '8', '24']} pb="6">
          <Header />

          <Flex w="100%" mt={['20', '20', '20', '0']}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
