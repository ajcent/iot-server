import rateLimit from "express-rate-limit";

const REQUEST_TIME_IN_MINUTES = 15 * 60 * 1000;
const REQUEST_LIMIT = 100;

const limiter = rateLimit({
  windowMs: REQUEST_TIME_IN_MINUTES,
  max: REQUEST_LIMIT,
});

export default limiter;
