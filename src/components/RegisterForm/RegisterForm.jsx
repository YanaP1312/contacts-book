import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FeedbackSchema } from "./feedBackSchema";
import { useId } from "react";
import s from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
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
