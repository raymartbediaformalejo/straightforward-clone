import { z } from "zod";
import { userSchema } from "./schema";

export type MutationArgs = {
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
};

export type TGenericResponse = {
  status: string;
  message: string;
};
export type TUser = z.infer<typeof userSchema>;
export type TLoginUser = Pick<z.infer<typeof userSchema>, "email" | "password">;
