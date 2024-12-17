import express from "express";

import RFIDController from "./controller";
import RFIDService from "./services";

const router = express.Router();
const rfidController = new RFIDController(new RFIDService());

router
  .route("/")
  .get(rfidController.getAllRFID)
  .post(rfidController.createRFID);

router
  .route("/:id")
  .put(rfidController.editRFID)
  .delete(rfidController.deleteRFID);

export default router;
