import { Request, Response, NextFunction } from "express";

const API_KEY = process.env.API_KEY || "your-api-key";

const apiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    res.status(400).send({ message: "API key is required" });
  } else if (apiKey !== API_KEY) {
    res.status(403).send({ message: "Forbidden: Invalid API key" });
  } else {
    next();
  }
};

export default apiKey;
