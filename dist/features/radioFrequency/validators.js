"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uidSchema = exports.editRfidSchema = exports.postProductSchema = void 0;
const zod_1 = require("zod");
const uidField = zod_1.z
    .string()
    .min(8, { message: "UID must be at least 8 characters" });
const nameField = zod_1.z
    .string()
    .min(3, { message: "Name must be at least 3 characters" });
const amountField = zod_1.z.number().optional();
exports.postProductSchema = zod_1.z.object({
    uid: uidField,
    name: nameField,
    amount: amountField,
});
exports.editRfidSchema = zod_1.z.object({
    name: nameField.optional(),
    amount: amountField,
});
exports.uidSchema = uidField;
