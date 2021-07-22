import React from 'react';

import NextLink from 'next/link';

import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';

import { ActiveLink } from './ActiveLink';

export type LinkProps = ChakraLinkProps & {
  href: string;
  icon: any;
  children: React.ReactNode;
};

export function Link({ href, icon, children, ...rest }: LinkProps) {
  const { isSidebarClosed } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <NextLink href={href}>
      <ActiveLink href={href}>
        <ChakraLink display="flex" alignItems="center" {...rest}>
          <Icon as={icon} fontSize="20" />
          <Text
            ml="4"
            fontWeight="medium"
            opacity={
              isDrawerSidebar || (!isDrawerSidebar && !isSidebarClosed) ? 1 : 0
            }
            overflow="hidden"
            textOverflow="ellipsis"
            display="-webkit-box"
            css={{
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
            mt="2px"
            transition="all 0.2s ease"
          >
            {children}
          </Text>
        </ChakraLink>
      </ActiveLink>
    </NextLink>
  );
}
