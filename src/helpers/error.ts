export interface TApiError extends Error {
  code?: number;
}

export class ApiError extends Error implements TApiError {
  code: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.code = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
