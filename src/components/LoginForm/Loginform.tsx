import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useId, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { LoginCredentials } from "../../redux/reduxTypes/interfacesAuth";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: LoginCredentials,
    actions: FormikHelpers<LoginCredentials>
  ) => {
    try {
      await dispatch(logIn(values)).unwrap();
      console.log("login success");
    } catch (error) {
      console.log("login error");
    }
    actions.resetForm();
  };

  return (
    <Formik<LoginCredentials>
      onSubmit={handleSubmit}
      initialValues={{ email: "", password: "" }}
    >
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
        <div className={s.passwordWrapper}>
          <Field
            className={s.input}
            type={showPassword ? "text" : "password"}
            name="password"
            id={passwordFieldId}
            placeholder="Enter your password"
            autoComplete="password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={s.toggleBtn}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <ErrorMessage className={s.error} name="password" component="span" />
        <button className={s.btnLog} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
