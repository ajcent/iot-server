"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendErrorResponse = ({ message = "An unknown error occurred", code = 400, success = false, } = {}) => {
    return {
        message,
        code,
        success,
    };
};
exports.default = sendErrorResponse;
