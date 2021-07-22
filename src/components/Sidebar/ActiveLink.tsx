import React, { cloneElement } from 'react';

import { useRouter } from 'next/router';

import { Link, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

export type ActiveLinkProps = ChakraLinkProps & {
  href: string;
  children: React.ReactElement;
  shouldMatchExactHref?: boolean;
};

export function ActiveLink({
  shouldMatchExactHref,
  children,
  ...rest
}: ActiveLinkProps): React.ReactElement {
  let isActive = false;

  const { pathname } = useRouter() || { pathname: '/' };

  if (
    shouldMatchExactHref &&
    (pathname === rest.href || pathname === rest.as)
  ) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (pathname.startsWith(String(rest.href)) ||
      pathname.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'secondary.500' : 'gray.200',
        fontWeight: isActive && 'bold',
      })}
    </Link>
  );
}

ActiveLink.defaultProps = {
  shouldMatchExactHref: false,
};
