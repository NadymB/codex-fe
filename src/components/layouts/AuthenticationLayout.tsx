"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
import restConnector from "@/connectors/axiosRestConnector";
import { authService } from "@/services/AuthServices";
export const AuthenticationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { getCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getCurrentUser();
  }, []);
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
  return children;
};
