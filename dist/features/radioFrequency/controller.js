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
class RFIDController {
    constructor(service) {
        this.getAllRFID = (_, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const rfidRecords = yield this.service.getAllRFID();
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: rfidRecords }));
            }
            catch (error) {
                next(error);
            }
        });
        this.getRFIDById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const currentUID = validators_1.uidSchema.parse(req.params.id);
                const rfidRecord = yield this.service.getRFIDById(currentUID);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: rfidRecord }));
            }
            catch (error) {
                next(error);
            }
        });
        this.createRFID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const rfidPayload = validators_1.postProductSchema.parse(req.body);
                const newRfid = yield this.service.postRFID(rfidPayload);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: newRfid }));
            }
            catch (error) {
                next(error);
            }
        });
        this.editRFID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.id;
                const rfidPayload = validators_1.editRfidSchema.parse(req.body);
                const modifiedRfid = yield this.service.editRFID(uid, rfidPayload);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: modifiedRfid }));
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteRFID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const uid = req.params.id;
                const deletedRfid = yield this.service.deleteRFID(uid);
                res.send((0, responseBuilder_1.sendSuccessResponse)({ data: deletedRfid }));
            }
            catch (error) {
                next(error);
            }
        });
        this.service = service;
    }
}
exports.default = RFIDController;
