export const errorCodes = [
  {
    code: 100,
    msg: "All fields are required.",
  },
  {
    code: 101,
    msg: "Invalid input provided.",
  },
  {
    code: 102,
    msg: "Staff code must start with NV00.",
  },
  {
    code: 103,
    msg: "Invalid phone number format.",
  },
  {
    code: 104,
    msg: "Customer position is not available.",
  },
  {
    code: 105,
    msg: "Customer code must start with KH00.",
  },
  {
    code: 106,
    msg: "Booking code must start with BO00.",
  },
  {
    code: 107,
    msg: "Service code must start with DV00.",
  },

  // 2xx: Lỗi kết nối hoặc tương tác với cơ sở dữ liệu
  {
    code: 200,
    msg: "Failed to connect to the database.",
  },
  {
    code: 201,
    msg: "Database synchronization failed.",
  },
  {
    code: 202,
    msg: "Database query failed.",
  },
  {
    code: 203,
    msg: "Database transaction failed.",
  },

  // 3xx: Tài nguyên đã tồn tại
  {
    code: 300,
    msg: "Staff already exists.",
  },
  {
    code: 301,
    msg: "Service already exists.",
  },
  {
    code: 302,
    msg: "Customer already exists.",
  },
  {
    code: 303,
    msg: "Booking already exists.",
  },

  // 4xx: Tài nguyên không tồn tại hoặc không hợp lệ
  {
    code: 400,
    msg: "Requested resource not found.",
  },
  {
    code: 401,
    msg: "Staff not found.",
  },
  {
    code: 402,
    msg: "Service not found.",
  },
  {
    code: 403,
    msg: "Customer not found.",
  },
  {
    code: 404,
    msg: "Booking not found.",
  },

  // 5xx: Lỗi nội bộ hệ thống
  {
    code: 500,
    msg: "An unexpected error occurred. Please try again later.",
  },
  {
    code: 501,
    msg: "Service is temporarily unavailable. Please try again later.",
  },
  {
    code: 502,
    msg: "Request timed out. Please try again later.",
  },
];
