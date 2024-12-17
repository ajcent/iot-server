import "module-alias/register";

import dotenv from "dotenv";

import app from "@/config/app";
import rfidRoutes from "@/features/radioFrequency";
import reservationRoutes from "@/features/reservation";
import userRoutes from "@/features/user";

import globalErrorHandler from "@/middlewares/globalError";
import apiKey from "@/middlewares/apiKey";

dotenv.config();
const port = process.env.PORT || 3000;

app.use(apiKey);
app.use("/uid", rfidRoutes);
app.use("/reservation", reservationRoutes);
app.use("/user", userRoutes);

app.use(globalErrorHandler);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
