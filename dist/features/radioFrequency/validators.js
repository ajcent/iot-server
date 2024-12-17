"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRfidSchema = exports.postProductSchema = void 0;
const zod_1 = require("zod");
exports.postProductSchema = zod_1.z.object({
    uid: zod_1.z.string().min(8, { message: "UID must be at least 8 characters" }),
    name: zod_1.z.string().min(3, { message: "Name must be at least 3 characters" }),
    amount: zod_1.z.number().optional(),
});
exports.editRfidSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(3, { message: "Name must be at least 3 characters" })
        .optional(),
    amount: zod_1.z.number().optional(),
});
