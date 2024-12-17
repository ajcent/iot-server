"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("@/config/app"));
const radioFrequency_1 = __importDefault(require("@/features/radioFrequency"));
const reservation_1 = __importDefault(require("@/features/reservation"));
const user_1 = __importDefault(require("@/features/user"));
const globalError_1 = __importDefault(require("@/middlewares/globalError"));
const apiKey_1 = __importDefault(require("@/middlewares/apiKey"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app_1.default.use(apiKey_1.default);
app_1.default.use("/uid", radioFrequency_1.default);
app_1.default.use("/reservation", reservation_1.default);
app_1.default.use("/user", user_1.default);
app_1.default.use(globalError_1.default);
app_1.default.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
