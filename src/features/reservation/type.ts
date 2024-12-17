import { z } from "zod";

import { editSlotSchema, postSlotSchema } from "./validators";

export type PostSlot = z.infer<typeof postSlotSchema>;
export type EditSlot = z.infer<typeof editSlotSchema>;
