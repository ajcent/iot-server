"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotSchema = exports.editSlotSchema = exports.postSlotSchema = void 0;
const zod_1 = require("zod");
exports.postSlotSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, { message: "Slot name must be 3 or more characters" }),
    slot: zod_1.z.number().min(0, { message: "Slot number must be a non-zero value" }),
});
exports.editSlotSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, { message: "Slot name must be 3 or more characters" })
        .optional(),
    slot: zod_1.z
        .number()
        .min(0, { message: "Slot number must be a non-zero value" })
        .optional(),
    isOccupied: zod_1.z.boolean(),
});
exports.slotSchema = zod_1.z
    .number()
    .min(0, { message: "Slot number must be a non-zero value" });
