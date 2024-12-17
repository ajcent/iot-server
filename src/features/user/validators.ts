import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must have at least 3 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters." }),
});
