import express from "express";

import ReservationController from "./controller";
import ReservationService from "./services";
import { isAuthenticated } from "@/middlewares/isAuthenticated";

const router = express.Router();
const reservationController = new ReservationController(
  new ReservationService()
);

router
  .route("/")
  .get(reservationController.getReservations)
  .post(isAuthenticated, reservationController.postReservation);

router
  .route("/:id")
  .put(isAuthenticated, reservationController.editReservation)
  .delete(isAuthenticated, reservationController.deleteReservation);

export default router;
