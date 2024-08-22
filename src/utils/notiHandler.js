import { notification } from "antd";
import { errorCodes } from "./errorCode";

export const successHandler = (title, description) => {
  notification.success({
    message: title,
    description: description,
    showProgress: true,
  });
};

export const handleError = (error) => {
  const errCode = error.response?.data?.code;
  let errorMsg = "Oops! Something wrong!";
  const matchError = errorCodes.find((err) => err.code === errCode);

  if (matchError) {
    errorMsg = matchError.msg;
  }

  notification.error({
    message: "FAILED",
    description: errorMsg,
    showProgress: true,
  });
};
