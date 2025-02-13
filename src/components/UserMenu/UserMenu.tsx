import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.user}>Welcome, {user.name}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
