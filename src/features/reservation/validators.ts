import { z } from "zod";

export const postSlotSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Slot name must be 3 or more characters" }),
  slot: z.number().min(0, { message: "Slot number must be a non-zero value" }),
});

export const editSlotSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Slot name must be 3 or more characters" })
    .optional(),
  slot: z
    .number()
    .min(0, { message: "Slot number must be a non-zero value" })
    .optional(),
  isOccupied: z.boolean(),
});

export const slotSchema = z
  .number()
  .min(0, { message: "Slot number must be a non-zero value" });
