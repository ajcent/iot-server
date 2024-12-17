import { Request, Response, NextFunction } from "express";

import { sendSuccessResponse } from "@/helpers/responseBuilder";

import RFIDService from "./services";
import { editRfidSchema, postProductSchema } from "./validators";

export default class RFIDController {
  private service: RFIDService;

  constructor(service: RFIDService) {
    this.service = service;
  }

  getAllRFID = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rfidRecords = await this.service.getAllRFID();
      res.send(sendSuccessResponse({ data: rfidRecords }));
    } catch (error) {
      next(error);
    }
  };

  createRFID = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rfidPayload = postProductSchema.parse(req.body);
      const newRfid = await this.service.postRFID(rfidPayload);
      res.send(sendSuccessResponse({ data: newRfid }));
    } catch (error) {
      next(error);
    }
  };

  editRFID = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const uid = req.params.id;
      const rfidPayload = editRfidSchema.parse(req.body);
      const modifiedRfid = await this.service.editRFID(uid, rfidPayload);
      res.send(sendSuccessResponse({ data: modifiedRfid }));
    } catch (error) {
      next(error);
    }
  };

  deleteRFID = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const uid = req.params.id;
      const deletedRfid = await this.service.deleteRFID(uid);
      res.send(sendSuccessResponse({ data: deletedRfid }));
    } catch (error) {
      next(error);
    }
  };
}
