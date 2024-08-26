import { TLoginUser } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
import { loginUserAPI, logout, removeHeaderToken, setHeaderToken } from "./api";

export const useLoginUser = () => {
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: TLoginUser) => loginUserAPI(data),
    onSuccess: (response) => {
      const {
        data: { accessToken },
      } = response;
      setHeaderToken(accessToken);
    },
    onError: (_, error) => {
      console.log("Error Creation", error);
      return "error";
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      removeHeaderToken();
    },
    onError: (error) => {
      console.error("💥💥Logout failed", error);
    },
  });
};
