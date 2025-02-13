import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export default function RegistrationPage() {
  return (
    <>
      <Waves />
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </>
  );
}
