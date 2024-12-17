"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessResponse = exports.sendErrorResponse = void 0;
const sendErrorResponse = (params = {}) => {
    const { message = "An unknown error occurred", code = 400, success = false, } = params;
    return { message, code, success };
};
exports.sendErrorResponse = sendErrorResponse;
const sendSuccessResponse = (params = {}) => {
    const { code = 200, success = true, data } = params;
    return { code, success, data };
};
exports.sendSuccessResponse = sendSuccessResponse;
