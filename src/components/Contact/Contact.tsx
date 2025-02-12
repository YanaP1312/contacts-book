import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.listItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <FaUserAlt size={15} style={{ marginRight: 10 }} />
          {contact.name}
        </p>
        <a
          className={s.contactNum}
          href={`tel:${contact.number
            .trim()
            .replace(/\s+/g, "")
            .replace(/-/g, "")}`}
        >
          <FaPhoneAlt
            className={s.icon}
            size={18}
            style={{ marginRight: 10 }}
          />
          {contact.number}
        </a>
      </div>
      <button onClick={handleDelete} className={s.btnDelete}>
        Delete
      </button>
    </div>
  );
}
