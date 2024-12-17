import { SessionOptions } from "express-session";

const sessionConfig: SessionOptions = {
  secret: process.env.SESSON_KEY || "your_secret_key",
  resave: false,
  saveUninitialized: false,
};

export default sessionConfig;
