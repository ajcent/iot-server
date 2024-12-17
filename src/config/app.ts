import express from "express";
import cors from "cors";
import helmet from "helmet";
import session from "express-session";
import passport from "passport";

import limiter from "@/config/rateLimiter";
import sessionConfig from "./session";
import { initializePassport } from "./passport";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());

app.use(limiter);
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
initializePassport();

app.get("/", (req, res) => {
  res.send("Welcome");
});

export default app;
