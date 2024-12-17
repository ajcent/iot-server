"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("@/helpers/error");
const library_1 = require("@prisma/client/runtime/library");
const responseBuilder_1 = require("@/helpers/responseBuilder");
const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof error_1.ApiError) {
        res.status(400).send((0, responseBuilder_1.sendErrorResponse)({ message: err.message }));
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        res
            .status(409)
            .send((0, responseBuilder_1.sendErrorResponse)({ message: err.message, code: err.code }));
    }
    else {
        res.status(400).send((0, responseBuilder_1.sendErrorResponse)({ message: err.message }));
    }
};
exports.default = globalErrorHandler;
