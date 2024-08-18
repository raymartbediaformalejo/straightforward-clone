import { apiClient, setHeaderToken } from "./api";

export const fetchNewToken = async () => {
  try {
    const token: string = await apiClient
      .get("http://localhost:4000/auth/refresh")
      .then((res) => res.data.token);
    return token;
  } catch (error) {
    return null;
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const refreshAuth = async (failedRequest: any) => {
  const newToken = await fetchNewToken();

  if (newToken) {
    failedRequest.response.config.headers.Authorization = "Bearer " + newToken;
    setHeaderToken(newToken);
    return Promise.resolve(newToken);
  } else {
    return Promise.reject();
  }
};
