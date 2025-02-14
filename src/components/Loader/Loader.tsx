import s from "./Loader.module.css";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loader}>
      <PropagateLoader color="rgb(219, 14, 14)" />
    </div>
  );
};
export default Loader;
