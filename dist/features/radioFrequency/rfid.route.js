"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rfid_controller_1 = __importDefault(require("./rfid.controller"));
const rfid_services_1 = __importDefault(require("./rfid.services"));
const router = express_1.default.Router();
const rfidController = new rfid_controller_1.default(new rfid_services_1.default());
router.get("/", rfidController.getAllRFID);
router.post("/", rfidController.createRFID);
exports.default = router;
