import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri';

import {
  Box,
  Drawer,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  Flex,
  Icon,
  Button,
  Text,
  IconButton,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';

import { Logo } from './Logo';
import { Nav } from './Nav';
import { Search } from './Search';

export function Sidebar(): React.ReactElement {
  const { isSidebarClosed, toggleSidebar, isOpen, onClose } =
    useSidebarDrawer();

  const isTabletScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="primary.500" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader color="white">
              <Logo />
              {!isTabletScreen && <Search />}
            </DrawerHeader>

            <DrawerBody color="white">
              <Nav />
            </DrawerBody>
            <DrawerFooter justifyContent="flex-start">
              <Button
                display="flex"
                alignItems="center"
                leftIcon={<FiLogOut color="secondary.500" />}
                colorScheme="secondary.500"
                color="secondary.500"
                variant="unstyled"
              >
                Sair
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      display="flex"
      flexDir="column"
      pl="6"
      bg="primary.500"
      color="white"
      w={!isSidebarClosed ? '64' : '24'}
      transition="width 0.2s"
    >
      <Flex flex="0" flexDir="row" alignItems="center" py="6">
        <IconButton
          mr="5"
          fontSize="24"
          minW="0"
          variant="unstyled"
          aria-label="Open navigation"
          icon={<Icon as={!isSidebarClosed ? RiMenu2Fill : RiMenu3Fill} />}
          onClick={toggleSidebar}
        />

        <Logo />
      </Flex>

      <Flex flex="1" overflow="auto">
        <Nav />
      </Flex>

      <Flex
        as="footer"
        flexDir="row"
        overflow="auto"
        alignItems="center"
        py="6"
        mt="auto"
      >
        <Button
          display="flex"
          alignItems="center"
          leftIcon={<FiLogOut color="secondary.500" />}
          colorScheme="secondary.500"
          color="secondary.500"
          variant="unstyled"
        >
          <Text opacity={!isSidebarClosed ? 1 : 0} transition="opacity 0.2s">
            Sair
          </Text>
        </Button>
      </Flex>
    </Box>
  );
}
