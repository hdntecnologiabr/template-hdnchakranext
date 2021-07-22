import React from 'react';

import { Box, Stack } from '@chakra-ui/react';

type SectionProps = {
  children: React.ReactNode;
};

export function Section({ children }: SectionProps) {
  return (
    <Box>
      <Stack spacing="6" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
