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
const validators_1 = require("./validators");
class UserController {
    constructor(userService) {
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = validators_1.registerSchema.parse(req.body);
                const newUser = yield this.userService.createUser(payload);
                res.status(201).json(newUser);
            }
            catch (error) {
                next(error);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                res.json({ id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id, username: (_b = req.user) === null || _b === void 0 ? void 0 : _b.username });
            }
            catch (error) {
                next(error);
            }
        });
        this.userService = userService;
    }
}
exports.default = UserController;
