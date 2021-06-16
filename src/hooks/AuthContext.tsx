import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { setCookie, parseCookies, destroyCookie } from 'nookies';

import api from '~/services/api';

interface IUser {
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: IUser;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  loading: boolean;
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const THIRTY_DAYS = 60 * 60 * 24 * 30;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    const { 'appname.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => console.log('response', response));
    }
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    setLoading(true);

    try {
      const response = await api.post('/auth', { email, password });
      const { token, user } = response.data;

      setCookie(undefined, 'appname.token', token, {
        maxAge: THIRTY_DAYS,
        path: '/',
      });
      setCookie(undefined, 'appname.user', JSON.stringify(user), {
        maxAge: THIRTY_DAYS,
        path: '/',
      });

      setData({ token, user });
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error('E-mail ou senha incorretos, tente novamente.');
    }
  }, []);

  const signOut = useCallback(() => {
    destroyCookie(undefined, 'appname.token');
    destroyCookie(undefined, 'appname.user');

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
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
