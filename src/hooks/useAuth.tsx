import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthCtx } from "@/components/authentication/AuthProvider";

export const useAuth = () => {
  const {
    currentUser,
    setCurrentUser,
    loading,
    login,
    fetchCurrentUser,
    getCurrentUser,
    setLoading,
    logout,
    fetchUserBalance,
    currentBalance,
    setCurrentBalance,
    setTradeCurrenty,
    tradeCurrenty,
  } = useContext(AuthCtx);

  return {
    currentUser,
    setCurrentUser,
    loading,
    login,
    logout,
    setLoading,
    fetchCurrentUser,
    getCurrentUser,
    fetchUserBalance,
    currentBalance,
    setCurrentBalance,
    setTradeCurrenty,
    tradeCurrenty,
  };
};

export const useAuthProtection = (options: {
  redirect: string;
  preventAuthenticatedUser?: boolean;
  preventUnAuthenticatedUser?: boolean;
}) => {
  const router = useRouter();
  const { currentUser, loading, getCurrentUser, setLoading } = useAuth();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const admin = await getCurrentUser();
      if (options?.preventAuthenticatedUser) {
        if (admin) {
          router.replace(options.redirect);
        }
      } else if (options?.preventUnAuthenticatedUser) {
        if (!admin) {
          router.back();
        }
      }
      setLoading(false);
      return;
    })();
  }, []);

  return { currentUser, loading };
};
