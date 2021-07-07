/* eslint-disable react/no-children-prop */
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import Image from 'next/image';

import { Flex, Heading, Icon, Link, Box } from '@chakra-ui/react';

import LogoHDNBlack from '~/assets/images/logo-hdn-preto.png';
import LogoHDN from '~/assets/images/logo-hdn.png';
import { Button } from '~/components/Form/Button';
import { Input } from '~/components/Form/Input';

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        display={['none', 'none', 'none', 'flex']}
        flex="0 0 50%"
        flexDir="column"
        alignItems="center"
        px={['50px', '50px', '50px', '50px', '150px']}
        bg="primary.500"
      >
        <Box
          w={['200px', '200px', '200px', '300px', '350px']}
          mt="150px"
          mb="76px"
        >
          <Image src={LogoHDN} alt="Oxiteno Logo" layout="fill" />
        </Box>
        <Heading color="white" textAlign="center">
          Template HDN
        </Heading>
      </Flex>
      <Flex
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        px={['4', '6', '40', '16', '40']}
      >
        <Flex flexDir="column" alignItems="center" py="16">
          <Box w="250px" mb="12">
            <Image src={LogoHDNBlack} alt="Oxiteno Logo" layout="fill" />
          </Box>
          <Input
            name="username"
            placeholder="Usuário"
            icon={<Icon as={FaUser} />}
            mb="6"
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={<Icon as={FaLock} />}
            mb="6"
          />

          <Button w="100%" mb="6">
            Entrar
          </Button>

          <Link
            href="/forgot"
            fontSize="12px"
            color="gray.500"
            _hover={{
              color: 'gray.700',
            }}
            textDecoration="underline"
          >
            Esqueci minha senha
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
