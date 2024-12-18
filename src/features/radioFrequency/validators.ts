import { z } from "zod";

const uidField = z
  .string()
  .min(8, { message: "UID must be at least 8 characters" });
const nameField = z
  .string()
  .min(3, { message: "Name must be at least 3 characters" });
const amountField = z.number().optional();

export const postProductSchema = z.object({
  uid: uidField,
  name: nameField,
  amount: amountField,
});

export const editRfidSchema = z.object({
  name: nameField.optional(),
  amount: amountField,
});

export const uidSchema = uidField;
