import { z } from "zod";

import { registerSchema } from "./validators";

export type RegisterSchema = z.infer<typeof registerSchema>;
