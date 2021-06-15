import React from 'react';

import { AuthProvider } from './auth';

export const AppProvider: React.FC = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
);
