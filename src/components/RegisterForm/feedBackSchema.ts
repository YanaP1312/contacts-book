import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(15, "Too long!")
    .matches(/^\+?[0-9]*$/, "Only numbers and optional '+' are allowed")
    .required("Number is required"),
});
