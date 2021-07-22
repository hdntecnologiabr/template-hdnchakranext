import React from 'react';
import { RiDashboardFill } from 'react-icons/ri';

import { Stack } from '@chakra-ui/react';

import { useSidebarDrawer } from '~/hooks/sidebar';

import { Link } from './Link';
import { Section } from './Section';

export function Nav(): React.ReactElement {
  const { isSidebarClosed } = useSidebarDrawer();

  return (
    <Stack
      overflowX={!isSidebarClosed ? 'unset' : 'hidden'}
      spacing="12"
      pr="6"
      align="flex-start"
    >
      <Section>
        <Link href="/home" icon={RiDashboardFill}>
          Dashboard
        </Link>
      </Section>

      <Section>
        <Link href="/order" icon={RiDashboardFill}>
          Novo pedido
        </Link>
        <Link href="/orders" icon={RiDashboardFill}>
          Meus pedidos
        </Link>
        <Link href="/vehicles" icon={RiDashboardFill}>
          Fluxo de veículos
        </Link>
        <Link href="/charging" icon={RiDashboardFill}>
          Agendar carregamento
        </Link>
        <Link href="/products" icon={RiDashboardFill}>
          Produtos
        </Link>
        <Link href="/bills" icon={RiDashboardFill}>
          Emitir boletos
        </Link>
      </Section>

      <Section>
        <Link href="/me" icon={RiDashboardFill}>
          Minha conta
        </Link>
        <Link href="/corporate" icon={RiDashboardFill}>
          Inf. corporativas
        </Link>
      </Section>
    </Stack>
  );
}
