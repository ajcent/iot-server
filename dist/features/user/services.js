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
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = __importDefault(require("@/client/prisma"));
class UserService {
    createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(payload.password, 10);
            return yield prisma_1.default.user.create({
                data: Object.assign(Object.assign({}, payload), { password: hashedPassword }),
                select: { username: true, id: true },
            });
        });
    }
    findUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findUnique({
                where: { id: userId },
            });
            return user;
        });
    }
    findUserByEmailOrId(identifier) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateUser(userId, payload) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = UserService;
