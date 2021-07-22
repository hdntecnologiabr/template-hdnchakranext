import React, { createContext, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { useDisclosure } from '@chakra-ui/react';

const SidebarDrawerContext = createContext({});

type SidebarDrawerContextProps = {
  children: React.ReactNode;
};

function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const disclosure = useDisclosure();

  const { pathname } = useRouter() || { pathname: '/' };

  useEffect(() => {
    disclosure.onClose();
  }, [pathname]);

  function toggleSidebar() {
    setIsSidebarClosed(!isSidebarClosed);
  }

  return (
    <SidebarDrawerContext.Provider
      value={{
        ...disclosure,
        toggleSidebar,
        isSidebarClosed,
      }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}

function useSidebarDrawer(): any {
  const context = useContext(SidebarDrawerContext);

  if (!context) {
    throw new Error(
      'useSidebarDrawer must be used within an SidebarDrawerProvider.',
    );
  }

  return context;
}

export { SidebarDrawerProvider, useSidebarDrawer };
