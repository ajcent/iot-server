"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
// TODO: remove ZodError, create global error
const controller_1 = __importDefault(require("./controller"));
const services_1 = __importDefault(require("./services"));
const router = express_1.default.Router();
const userController = new controller_1.default(new services_1.default());
router.post("/register", userController.register);
router.post("/login", passport_1.default.authenticate("local"), userController.login);
router.post("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to log out" });
        }
        res.json({ message: "Successfully logged out" });
    });
});
exports.default = router;
