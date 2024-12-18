import express from "express";

import { isAuthenticated } from "@/middlewares/isAuthenticated";

import RFIDController from "./controller";
import RFIDService from "./services";

const router = express.Router();
const rfidController = new RFIDController(new RFIDService());

router
  .route("/")
  .get(isAuthenticated, rfidController.getAllRFID)
  .post(isAuthenticated, rfidController.createRFID);

router
  .route("/:id")
  .put(isAuthenticated, rfidController.editRFID)
  .delete(isAuthenticated, rfidController.deleteRFID)
  .get(rfidController.getRFIDById);

export default router;
