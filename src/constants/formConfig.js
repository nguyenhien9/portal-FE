

export const serviceFormConfig = [
    {
        label: "Service Code",
        name: "service_code",
        rules: [{ required: true, message: "Service code is required!" }, { max: 5, message: "5 digits maximum" }],
        inputProps: { placeholder: "S0001" }
    }, {
        label: "Service Name",
        name: "service_name",
        rules: [{ required: true, message: "Service name is required!" }],
        inputProps: { placeholder: "E.g: Giúp việc ở lại" }
    }
]