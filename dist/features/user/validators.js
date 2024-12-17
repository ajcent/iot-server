"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(3, { message: "Username must have at least 3 characters." }),
    password: zod_1.z
        .string()
        .min(8, { message: "Password must have at least 8 characters." }),
});
