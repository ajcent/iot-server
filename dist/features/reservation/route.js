"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const services_1 = __importDefault(require("./services"));
const isAuthenticated_1 = require("@/middlewares/isAuthenticated");
const router = express_1.default.Router();
const reservationController = new controller_1.default(new services_1.default());
router
    .route("/")
    .get(reservationController.getReservations)
    .post(isAuthenticated_1.isAuthenticated, reservationController.postReservation);
router
    .route("/:id")
    .put(isAuthenticated_1.isAuthenticated, reservationController.editReservation)
    .delete(isAuthenticated_1.isAuthenticated, reservationController.deleteReservation);
exports.default = router;
