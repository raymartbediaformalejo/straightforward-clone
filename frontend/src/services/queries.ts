import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { apiClient, getProductsAPI } from "./api";
import { TUser } from "@/types/type";

type Response = TUser;

export const useMe = () =>
  useQuery<Response, AxiosError>({
    queryKey: ["me"],
    queryFn: () => apiClient.get("/user").then((res) => res.data),
  });

export const useGetProduts = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: getProductsAPI
  })
}