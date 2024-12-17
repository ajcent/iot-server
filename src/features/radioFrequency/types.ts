import { z } from "zod";

import { editRfidSchema, postProductSchema } from "./validators";

export type PostProduct = z.infer<typeof postProductSchema>;
export type EditProduct = z.infer<typeof editRfidSchema>;
