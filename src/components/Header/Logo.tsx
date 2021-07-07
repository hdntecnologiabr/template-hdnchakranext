import React from 'react';

import Image from 'next/image';

import { Flex } from '@chakra-ui/react';

import LogoHDN from '~/assets/images/logo-hdn.png';

export function Logo(): React.ReactElement {
  return (
    <Flex w="56" alignItems="center">
      <Image layout="fill" src={LogoHDN} alt="Logo HDN Header" />
    </Flex>
  );
}
