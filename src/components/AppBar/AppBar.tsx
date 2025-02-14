import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/hooks";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
