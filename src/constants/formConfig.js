import { message } from "antd";
import { positions, serviceNames, status } from "./data";

export const serviceFormConfig = [
  {
    label: "Service Code",
    name: "service_code",
    type: "input",
    rules: [
      { required: true, message: "Service code is required!" },
      { max: 6, message: "6 digits maximum" },
    ],
    inputProps: { placeholder: "DV0001" },
  },
  {
    label: "Service Name",
    name: "service_name",
    type: "input",
    rules: [{ required: true, message: "Service name is required!" }],
    inputProps: { placeholder: "E.g: Giúp việc ở lại" },
  },
];

export const staffFormConfig = [
  {
    label: "Staff Code",
    name: "staff_code",
    type: "input",
    rules: [
      { required: true, message: "Staff code is required!" },
      { max: 5, message: "5 digits maximum" },
    ],
    inputProps: { placeholder: "E.g: 12929" },
  },
  {
    label: "Full Name",
    name: "full_name",
    type: "input",
    rules: [{ required: true, message: "Full name is required!" }],
    inputProps: { placeholder: "E.g: Nguyễn Văn A" },
  },
  {
    label: "Phone Number",
    name: "phone_number",
    type: "input",
    rules: [
      { required: true, message: "Phone number is required!" },
      { max: 10, message: "Phone number is invalid!" },
    ],
    inputProps: { placeholder: "E.g: 0xxxxxxxxx" },
  },
  {
    label: "Position",
    name: "position",
    type: "select", // Loại input là 'select'
    rules: [{ required: true, message: "Position is required!" }],
    selectProps: {
      options: positions,
      placeholder: "Select role",
    },
  },
];
export const customerFormConfig = [
  {
    label: "Full Name",
    name: "full_name",
    type: "input",
    rules: [{ required: true, message: "Full name is required!" }],
    inputProps: { placeholder: "E.g: Nguyễn Văn A" },
  },
  {
    label: "Phone Number",
    name: "phone_number",
    type: "input",
    rules: [
      { required: true, message: "Phone number is required!" },
      { max: 10, message: "Phone number is invalid!" },
    ],
    inputProps: { placeholder: "E.g: 0xxxxxxxxx" },
  },
  {
    label: "Address",
    name: "address",
    type: "input",
    rules: [
      { required: true, message: "Address is required!" },
      { max: 100, message: "Address is invalid!" },
    ],
  },
];

export const bookingFormConfig = [
  {
    label: "Customer Code",
    name: "customer_code",
    type: "input",
    rules: [
      { required: true, message: "Customer code is required!" },
      { max: 8, message: "Customer code is invalid, must be 8 letters!" },
    ],
    inputProps: { placeholder: "E.g: KH42690A" },
  },
  {
    label: "Staff Code",
    name: "staff_code",
    type: "input",
    rules: [
      { required: true, message: "Staff code is required!" },
      { max: 5, message: "Staff code is invalid,must be 5 letters!" },
    ],
    inputProps: { placeholder: "E.g: 12929" },
  },
  {
    label: "Service",
    name: "service_name",
    type: "select",
    rules: [{ required: true, message: "Service is required!" }],
    selectProps: {
      options: serviceNames,
      placeholder: "Select services",
    },
  },
  {
    label: "Status",
    name: "status",
    type: "select",
    rules: [{ required: true, message: "Status is required!" }],
    selectProps: {
      options: status,
      placeholder: "Select status",
    },
  },

  {
    label: "Booking date",
    name: "booking_date",
    type: "datepicker",
    rules: [{ required: true, message: "Booking date is required!" }],
    datePickerProps: {
      placeholder: "Select booking date",
      format: "YYYY-MM-DD",
    },
  },
  {
    label: "Notes",
    name: "notes",
    type: "textarea",
  },
];
