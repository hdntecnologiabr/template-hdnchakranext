import React, { useState, useEffect } from 'react';
import { RiMenuLine } from 'react-icons/ri';

import {
  Flex,
  IconButton,
  Icon,
  Avatar,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';

import { Notifications } from './Notifications';
import { Search } from './Search';

export function Header(): React.ReactElement {
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerColor = hasScrolled ? 'white' : 'gray.100';

  const { onOpen } = useSidebarDrawer();

  const isTabletScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleScrollEvent() {
    if (window.scrollY > 30) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
  });

  return (
    <Flex
      as="header"
      w="100%"
      mt={['0', '0', '0', '4']}
      mr="auto"
      mb="10"
      align="center"
      position={['fixed', 'fixed', 'fixed', 'unset']}
      left="0"
      px={['4', '4', '4', '0']}
      py={['4', '4', '4', '0']}
      bg={[headerColor, headerColor, headerColor, 'unset']}
      transition="all 0.5s"
      zIndex="2"
    >
      {!isWideScreen && (
        <IconButton
          mr="5"
          fontSize="24"
          minW="0"
          variant="unstyled"
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
        />
      )}

      {(isWideScreen || isTabletScreen) && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />

        <Avatar name="Lucas Alves" image="https://github.com/lcoalves.png" />
      </Flex>
    </Flex>
  );
}
