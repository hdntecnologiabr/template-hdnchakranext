import React, { ReactNode } from 'react';

import { AuthProvider } from './AuthContext';
import { SidebarDrawerProvider } from './sidebar';

export type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
    </AuthProvider>
  );
}
