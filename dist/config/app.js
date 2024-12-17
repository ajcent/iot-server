"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const rateLimiter_1 = __importDefault(require("@/config/rateLimiter"));
const session_1 = __importDefault(require("./session"));
const passport_2 = require("./passport");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.URL || "http://localhost:5173",
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use(rateLimiter_1.default);
app.use((0, express_session_1.default)(session_1.default));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
(0, passport_2.initializePassport)();
app.get("/", (req, res) => {
    res.send("Welcome");
});
exports.default = app;
