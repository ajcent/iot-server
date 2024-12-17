import { Request, Response, NextFunction } from "express";

import { sendSuccessResponse } from "@/helpers/responseBuilder";

import ReservationService from "./services";
import { editSlotSchema, postSlotSchema, slotSchema } from "./validators";

export default class ReservationController {
  private service: ReservationService;

  constructor(service: ReservationService) {
    this.service = service;
  }

  getReservations = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const payload = await this.service.getReservations();
      res.send(sendSuccessResponse({ data: payload }));
    } catch (error) {
      next(error);
    }
  };

  postReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payload = postSlotSchema.parse(req.body);
      const newReservation = await this.service.postReservation(payload);
      res.send(sendSuccessResponse({ data: newReservation }));
    } catch (error) {
      next(error);
    }
  };

  editReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const slotId = slotSchema.parse(req.params.id);
      const payload = editSlotSchema.parse(req.body);
      const modifiedReservation = await this.service.editReservation(
        slotId,
        payload
      );
      res.send(sendSuccessResponse({ data: modifiedReservation }));
    } catch (error) {
      next(error);
    }
  };

  deleteReservation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const slotId = slotSchema.parse(req.params.id);
      const deletedReservation = await this.service.deleteReservation(slotId);
      res.send(sendSuccessResponse({ data: deletedReservation }));
    } catch (error) {
      next(error);
    }
  };
}
