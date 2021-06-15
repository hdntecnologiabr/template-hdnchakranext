import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api, { clearLocalStorage } from '~/services/api';

interface  IUser {
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: IUser;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  loading: boolean;
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AuthState>(() => {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem('@AppName:token');
      const userStorage = window.localStorage.getItem('@AppName:user');

      if (token && userStorage) {
        const user = JSON.parse(userStorage);

        return {
          token,
          user,
        };
      }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    setLoading(true);

    try {
      const userAuth = await api.post('/auth', { username, password });
      const { token, user } = userAuth.data;

      if (typeof window !== "undefined") {
        window.localStorage.setItem('@AppName:token', token);
        window.localStorage.setItem('@AppName:user', JSON.stringify(user));
      }

      setData({ token, user });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error('E-mail ou senha incorretos, tente novamente.');
    }
  }, []);

  const signOut = useCallback(() => {
    clearLocalStorage();

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
