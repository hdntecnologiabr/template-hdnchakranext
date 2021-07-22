import React from 'react';

import Image from 'next/image';

import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';

import LogoHDNBlack from '~/assets/images/logo-hdn-preto.png';
import LogoHDN from '~/assets/images/logo-hdn.png';
import { useSidebarDrawer } from '~/hooks/sidebar';

export function Logo(): React.ReactElement {
  const { isSidebarClosed } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const flexBg = !isDrawerSidebar && !isSidebarClosed ? '' : 'primary.500';
  const flexPosition =
    !isDrawerSidebar && isSidebarClosed ? 'absolute' : 'inherit';
  const logoPosition = !isDrawerSidebar ? 'absolute' : 'inherit';

  return (
    <Flex
      w="56"
      alignItems="center"
      bg={flexBg}
      position={flexPosition}
      left={isSidebarClosed && '16'}
    >
      <Box
        display={
          isDrawerSidebar || (!isDrawerSidebar && !isSidebarClosed)
            ? 'block'
            : 'none'
        }
        position={logoPosition}
        transition="all 0.2s ease"
        w="40"
      >
        <Image layout="fill" src={LogoHDN} alt="Logo Oxiteno Sidebar" />
      </Box>
      <Box
        display={!isDrawerSidebar && isSidebarClosed ? 'block' : 'none'}
        position="absolute"
        transition="all 0.2s ease"
        left="16"
        w="40"
      >
        <Image
          layout="fill"
          src={LogoHDNBlack}
          alt="Logo Oxiteno Sidebar"
        />
      </Box>
    </Flex>
  );
}
