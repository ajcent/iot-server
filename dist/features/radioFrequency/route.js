"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const isAuthenticated_1 = require("@/middlewares/isAuthenticated");
const controller_1 = __importDefault(require("./controller"));
const services_1 = __importDefault(require("./services"));
const router = express_1.default.Router();
const rfidController = new controller_1.default(new services_1.default());
router
    .route("/")
    .get(isAuthenticated_1.isAuthenticated, rfidController.getAllRFID)
    .post(isAuthenticated_1.isAuthenticated, rfidController.createRFID);
router
    .route("/:id")
    .put(isAuthenticated_1.isAuthenticated, rfidController.editRFID)
    .delete(isAuthenticated_1.isAuthenticated, rfidController.deleteRFID)
    .get(rfidController.getRFIDById);
exports.default = router;
