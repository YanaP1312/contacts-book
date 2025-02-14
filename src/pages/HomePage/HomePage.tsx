import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <Waves />
      <DocumentTitle>Home</DocumentTitle>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to your personal phonebook </h1>
      </div>
    </div>
  );
}
