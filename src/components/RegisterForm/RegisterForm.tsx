import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { FeedbackSchema } from "./feedBackSchema";
import { useId } from "react";
import s from "./RegisterForm.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { AuthCredentials } from "../../redux/reduxTypes/interfacesAuth";

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (
    values: AuthCredentials,
    actions: FormikHelpers<AuthCredentials>
  ) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
      initialValues={{ name: "", email: "", password: "" }}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={s.input}
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Enter your name"
          autoComplete="name"
        />
        <ErrorMessage className={s.error} name="name" component="span" />

        <label className={s.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          id={emailFieldId}
          placeholder="Enter your email"
          autoComplete="email"
        />
        <ErrorMessage className={s.error} name="email" component="span" />

        <label className={s.label} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          placeholder="Enter your password"
          id={passwordFieldId}
          autoComplete="password"
        />
        <ErrorMessage className={s.error} name="password" component="span" />
        <button className={s.btnReg} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
