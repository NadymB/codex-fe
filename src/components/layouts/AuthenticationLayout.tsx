"use client";
import { useEffect } from "react";

import restConnector from "@/connectors/axiosRestConnector";
import { authService } from "@/services/AuthServices";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../Loading";
export const AuthenticationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser, getCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, [currentUser]);

  const fetchUser = async () => {
    const user = await getCurrentUser();
    if (!user) {
      router.replace("/m/login");
    }
  };
  
  restConnector.interceptors.response.use(
    (response) => {
      if (!response.data.success && response.data.httpCode === 403) {
        authService.logout();
        router.push("/m/login");
      }
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        authService.logout();
        router.push("/m/login");
      }
      return error;
    }
  );
  return (
    <>
      {currentUser ? (
        children
      ) : (
        <div className="h-screen">
          <Loading />
        </div>
      )}
    </>
  );
};
