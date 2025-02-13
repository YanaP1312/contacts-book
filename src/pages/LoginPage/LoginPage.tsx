import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import { LoginForm } from "../../components/LoginForm/Loginform";

export default function LoginPage() {
  return (
    <>
      <Waves />
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </>
  );
}
