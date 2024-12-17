"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseBuilder_1 = require("@/helpers/responseBuilder");
const validators_1 = require("./validators");
class ReservationController {
    constructor(service) {
        this.getReservations = (_, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield this.service.getReservations();
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: payload }));
            }
            catch (error) {
                next(error);
            }
        });
        this.postReservation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = validators_1.postSlotSchema.parse(req.body);
                const newReservation = yield this.service.postReservation(payload);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: newReservation }));
            }
            catch (error) {
                next(error);
            }
        });
        this.editReservation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const slotId = validators_1.slotSchema.parse(req.params.id);
                const payload = validators_1.editSlotSchema.parse(req.body);
                const modifiedReservation = yield this.service.editReservation(slotId, payload);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: modifiedReservation }));
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteReservation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const slotId = validators_1.slotSchema.parse(req.params.id);
                const deletedReservation = yield this.service.deleteReservation(slotId);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: deletedReservation }));
            }
            catch (error) {
                next(error);
            }
        });
        this.service = service;
    }
}
exports.default = ReservationController;
