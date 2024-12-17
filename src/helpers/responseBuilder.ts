interface ResponseParams<T = unknown> {
  message?: string | string[];
  code?: string | number;
  success?: boolean;
  data?: T | T[];
}

export const sendErrorResponse = <T>(
  params: ResponseParams<T> = {}
): ResponseParams<T> => {
  const {
    message = "An unknown error occurred",
    code = 400,
    success = false,
  } = params;

  return { message, code, success };
};

export const sendSuccessResponse = <T>(
  params: ResponseParams<T> = {}
): ResponseParams<T> => {
  const { code = 200, success = true, data } = params;

  return { code, success, data };
};
