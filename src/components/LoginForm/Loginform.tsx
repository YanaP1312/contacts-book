import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => console.log("login success"))
      .catch(() => console.log("login error"));
    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: "", password: "" }}>
      <Form className={s.form}>
        <label htmlFor={emailFieldId} className={s.label}>
          Email
        </label>
        <Field
          className={s.input}
          type="email"
          name="email"
          id={emailFieldId}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        <ErrorMessage className={s.error} name="email" component="span" />

        <label className={s.label} htmlFor={passwordFieldId}>
          Password
        </label>
        <Field
          className={s.input}
          type="password"
          name="password"
          id={passwordFieldId}
          placeholder="Enter your password"
          autoComplete="password"
          required
        />
        <ErrorMessage className={s.error} name="password" component="span" />
        <button className={s.btnLog} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
