import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useAppDispatch } from "../../redux/hooks";
import { AddContactRequest } from "../../redux/reduxTypes/interfaceContact";
import { ContactSchema } from "../RegisterForm/feedBackSchema";

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: AddContactRequest,
    actions: FormikHelpers<AddContactRequest>
  ) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik<AddContactRequest>
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={s.error} name="name" component="span" />

        <label className={s.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.input}
          type="tel"
          inputMode="numeric"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button className={s.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
