import express from "express";

import ReservationController from "./controller";
import ReservationService from "./services";

const router = express.Router();
const reservationController = new ReservationController(
  new ReservationService()
);

router
  .route("/")
  .get(reservationController.getReservations)
  .post(reservationController.postReservation);

router
  .route("/:id")
  .put(reservationController.editReservation)
  .delete(reservationController.deleteReservation);

export default router;
