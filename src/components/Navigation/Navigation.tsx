import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useAppSelector } from "../../redux/hooks";

export const Navigation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
