import { z } from "zod";

export const postProductSchema = z.object({
  plate_number: z
    .string()
    .min(4, { message: "Plate Number must be at least 4 characters" }),
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  amount: z.number().optional(),
});

export const editRfidSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .optional(),
  amount: z.number().optional(),
  plate_number: z
    .string()
    .min(4, { message: "Plate Number must be at least 4 characters" })
    .optional(),
  uid: z
    .string()
    .min(4, { message: "UID must be at least 4 characters" })
    .optional(),
});

export const uidSchema = z
  .string()
  .min(4, { message: "UID must be at least 4 characters" });
