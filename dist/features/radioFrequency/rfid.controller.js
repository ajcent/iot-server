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
class RFIDController {
    constructor(service) {
        this.service = service;
    }
    getAllRFID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRFID = yield this.service.getAllRFID();
                res.send({
                    data: allRFID,
                });
                next();
            }
            catch (error) {
                next(error);
            }
        });
    }
    createRFID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allRFID = yield this.service.postRFID("1");
                res.send({
                    data: allRFID,
                });
                next();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = RFIDController;
