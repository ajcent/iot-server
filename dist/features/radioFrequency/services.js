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
    uid: true,
    amount: true,
    name: true,
    plate_number: true,
};
class RFIDService {
    constructor() {
        this.getRFIDById = (uid) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.rFID.findFirst({
                where: { uid },
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.getAllRFID = () => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.rFID.findMany({
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.postRFID = (payload) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.rFID.create({
                data: payload,
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.editRFID = (identifier, payload) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.rFID.update({
                data: payload,
                where: { plate_number: identifier },
                select: DEFAULT_RETURN_OBJECT,
            });
        });
        this.deleteRFID = (identifier) => __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.rFID.deleteMany({
                where: {
                    OR: [{ uid: identifier }, { plate_number: identifier }],
                },
            });
        });
    }
}
exports.default = RFIDService;
