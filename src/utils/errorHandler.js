import { message } from "antd";
import { errorCodes } from "./errorCode";

export const handleError = (error) => {
  const errCode = error.response?.data?.code;
  let errorMsg = "Oops! Something wrong!";
  const matchError = errorCodes.find((err) => err.code === errCode);

  if (matchError) {
    errorMsg = matchError.msg;
  }

  message.error(errorMsg);
};
