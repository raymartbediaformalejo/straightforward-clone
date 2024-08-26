import { z } from "zod";
import { productSchema, userSchema } from "./schema";

export type TGenericResponse = {
  status: string;
  message: string;
};
export type TUser = z.infer<typeof userSchema>;
export type TLoginUser = Pick<z.infer<typeof userSchema>, "email" | "password">;
export type TProduct = z.infer<typeof productSchema>