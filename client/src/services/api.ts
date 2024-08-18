import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { refreshAuth } from "./refresh-auth";
import { TLoginUser } from "@/types/type";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

apiClient.defaults.headers.common["Content-Type"] = "application/json";

export const loginUserAPI = async (data: TLoginUser) =>
  await apiClient.post("/auth", data);

export const logout = async () => await apiClient.post("/auth/logout");

export const setHeaderToken = (token: string) => {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  delete apiClient.defaults.headers.common.Authorization;
};

createAuthRefreshInterceptor(apiClient, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
});
