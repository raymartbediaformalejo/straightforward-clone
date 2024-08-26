import { z } from "zod";

const letterOnlyRegex = /^[a-zA-Z]+$/;
const numberOnlyRegex = /^\d+$/;
const addressRegex = /^[a-zA-Z0-9\s,.]+$/;

export const userSchema = z.object({
  userID: z.string().min(1),
  lastname: z
    .string()
    .min(1, "Last name is required")
    .refine((value) => letterOnlyRegex.test(value), {
      message: "Last name should only contain letters",
    }),
  firstname: z
    .string()
    .min(1, "First name is required")
    .refine((value) => letterOnlyRegex.test(value), {
      message: "First name should only contain letters",
    }),
  middlename: z
    .string()
    .optional()
    .default("")
    .refine((value) => letterOnlyRegex.test(value) || value.trim() === "", {
      message: "Middle name should only contain letters",
    }),
  mobileNo: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Mobile number must be 11 digits and only contain numbers.",
    })
    .refine((value) => numberOnlyRegex.test(value.replace(/\s/g, "")), {
      message: "Invalid phone number",
    })
    .optional(),
  email: z.string().min(1, "Email is required").email(),
  address: z
    .string()
    .min(1, "Address is required")
    .refine((value) => addressRegex.test(value), {
      message: "Invalid address",
    }),
  cityID: z.string().min(1, "City is required"),
  regionID: z.string().min(1, "Region is required"),
  zipCode: z.number().min(1, "Zip code is required"),
  password: z.string(),
});

export const loginUserSchema = userSchema.pick({
  email: true,
  password: true,
});

export const productSchema = z.object({
  productID:z.string(),
  productName: z.string(),
  thumbnail: z.string(),
  isFeatured: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
})
