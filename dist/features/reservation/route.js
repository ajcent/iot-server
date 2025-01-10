"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const services_1 = __importDefault(require("./services"));
const router = express_1.default.Router();
const reservationController = new controller_1.default(new services_1.default());
router
    .route("/")
    .get(reservationController.getReservations)
    .post(reservationController.postReservation);
router
    .route("/:id")
    .put(reservationController.editReservation)
    .delete(reservationController.deleteReservation);
exports.default = router;
