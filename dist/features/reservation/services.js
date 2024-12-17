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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("@/client/prisma"));
const DEFAULT_RETURN_OBJECT = {
    id: true,
    slot: true,
    name: true,
    is_occupied: true,
};
class Reservation {
    constructor() {
        this.getReservationBySlot = (slot) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.reservation.findFirst({
                where: { slot },
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.getReservations = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.reservation.findMany({
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.postReservation = (payload) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.reservation.create({
                data: payload,
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.editReservation = (slot, payload) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.reservation.update({
                data: payload,
                where: { slot },
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.deleteReservation = (slot) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.reservation.delete({
                where: { slot },
                select: DEFAULT_RETURN_OBJECT,
            });
        });
    }
}
exports.default = Reservation;
