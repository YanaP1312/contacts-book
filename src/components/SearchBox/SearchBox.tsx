import { ChangeEvent, useId } from "react";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectChangeFilter } from "../../redux/filters/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBox() {
  const searchId = useId();

  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectChangeFilter);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.label} htmlFor={searchId}>
        Find contacts
      </label>
      <div className={s.wrap}>
        <IoSearchOutline size={20} className={s.icon} />
        <input
          className={s.input}
          type="text"
          id={searchId}
          value={filter}
          onChange={handleFilterChange}
        ></input>
      </div>
    </div>
  );
}
