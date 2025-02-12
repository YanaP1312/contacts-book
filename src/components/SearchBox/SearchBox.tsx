import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectChangeFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const searchId = useId();

  const dispatch = useDispatch();
  const filter = useSelector(selectChangeFilter);

  const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label className={s.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        id={searchId}
        value={filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
}
