import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DocumentTitle from "../../components/DocumentTitle";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Waves className={s.background} />
      <div className={s.wrap}>
        <DocumentTitle>Home</DocumentTitle>

        <h1 className={s.title}>Welcom to your personal phonebook </h1>
      </div>
    </>
  );
}
