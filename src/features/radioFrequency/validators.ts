import { z } from "zod";

export const postProductSchema = z.object({
  uid: z.string().min(8, { message: "UID must be at least 8 characters" }),
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  amount: z.number().optional(),
});

export const editRfidSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .optional(),
  amount: z.number().optional(),
});
