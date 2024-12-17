"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_KEY = process.env.API_KEY || "your-api-key";
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        return res.status(400).json({ message: "API key is required" });
    }
    if (apiKey !== API_KEY) {
        return res.status(403).json({ message: "Forbidden: Invalid API key" });
    }
    next();
};
exports.default = apiKeyMiddleware;
