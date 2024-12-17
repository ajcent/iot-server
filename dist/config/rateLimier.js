"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const REQUEST_TIME_IN_MINUTES = 15 * 60 * 1000;
const REQUEST_LIMIT = 100;
const limiter = (0, express_rate_limit_1.default)({
    windowMs: REQUEST_TIME_IN_MINUTES,
    max: REQUEST_LIMIT,
});
exports.default = limiter;
