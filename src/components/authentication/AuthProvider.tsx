import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { onToast } from "@/hooks/useToast";
import { authService } from "@/services/AuthServices";
import { Account } from "@/models/User";

interface AuthCtxProps {
  currentUser: Account | null;
  setCurrentUser: Dispatch<SetStateAction<Account | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login: (values: { email: string; password: string }) => Promise<Account>;
  logout: () => void;
  fetchCurrentUser: () => Promise<Account | null>;
  getCurrentUser: () => Promise<Account | null>;
}

const defaultCtxVal: AuthCtxProps = {
  currentUser: null,
  loading: false,
  login: (values: { email: string; password: string }) =>
    new Promise((resolve, reject) => reject(null)),
  logout: () => {},
  fetchCurrentUser: () => new Promise((resolve, reject) => reject(null)),
  getCurrentUser: () => new Promise((resolve, reject) => reject(null)),
  setLoading: (value: SetStateAction<boolean>): void => {},
  setCurrentUser: (value: SetStateAction<Account | null>): void => {},
};

export const AuthCtx = createContext<AuthCtxProps>(defaultCtxVal);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (values: {
    email: string;
    password: string;
  }): Promise<any> => {
    try {
      setLoading(true);

      const admin = await authService.loginWithEmail(values);
      authService.loadAccessToken();
      const userFetch = await authService.fetchCurrentUser();

      if (userFetch) {
        setCurrentUser(userFetch);
      }

      setLoading(false);
      return admin;
      // return response;
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        const { response } = error;

        if (response) {
          const { data, status } = response;

          if (data.code) {
            onToast(data.code, "error");
          }

          if (status === 500) {
            onToast(
              "Something went wrong! Please try again later or contact us.",
              "error"
            );
            setLoading(false);

            return;
          }
          if (Array.isArray(data.message)) {
            data.message.map((msg: string) => {
              onToast(msg, "error");
            });
          } else {
            onToast(data.message, "error");
          }
        }
      } else {
        onToast(
          "Something went wrong! Please try again later or contact us.",
          "error"
        );
      }
      setLoading(false);
    }
  };

  const logout = async () => {
    authService.logout();
    setCurrentUser(null);
    await router.push("/login");
  };

  const fetchCurrentUser = async (): Promise<Account | null> => {
    const currentUser = await authService.fetchCurrentUser();
    setCurrentUser(currentUser);

    if (loading) {
      setLoading(false);
    }

    return currentUser;
  };

  return (
    <AuthCtx.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        login,
        logout,
        fetchCurrentUser,
        getCurrentUser: async () => {
          if (!currentUser) {
            return fetchCurrentUser();
          }
          setLoading(false);
          return currentUser;
        },
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
