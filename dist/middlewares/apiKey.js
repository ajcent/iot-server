"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const API_KEY = process.env.API_KEY || "your-api-key";
const apiKey = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
        res.status(400).send({ message: "API key is required" });
    }
    else if (apiKey !== API_KEY) {
        res.status(403).send({ message: "Forbidden: Invalid API key" });
    }
    else {
        next();
    }
};
exports.default = apiKey;
