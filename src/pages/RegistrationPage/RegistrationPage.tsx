import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <>
      <Waves />
      <DocumentTitle>Registration</DocumentTitle>
      <div className={s.wrap}>
        <RegisterForm />
      </div>
    </>
  );
}
