"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sessionConfig = {
    secret: process.env.SESSON_KEY || "your_secret_key",
    resave: false,
    saveUninitialized: false,
};
exports.default = sessionConfig;
