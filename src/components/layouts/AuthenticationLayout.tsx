"use client";
import { useEffect } from "react";

import "../../../i18n";

import restConnector from "@/connectors/axiosRestConnector";
import { authService } from "@/services/AuthServices";
import { useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";
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
  // restConnector.interceptors.response.use(
  //   (response) => {
  //     if (!response.data.success && response.data.httpCode === 403) {
  //       authService.logout();
  //       router.push("/m/login");
  //     }
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response.status === 401) {
  //       authService.logout();
  //       router.push("/m/login");
  //     }
  //     return error;
  //   }
  // );
  return children;
};
